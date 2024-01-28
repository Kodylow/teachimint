import React, { createContext, useEffect, useState } from 'react'

interface WebSocketResponse {
  jsonrpc: "2.0"
  id: number
  result: JSON
  error?: string
}

interface WebSocketRequest {
  method: string,
  params: string,
  onResponse?: ((response: WebSocketResponse) => void)
}

interface WebSocketContextProps {
  send?: (request: WebSocketRequest) => void
}

export const WebSocketContext = createContext<WebSocketContextProps>({})

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ws, setWs] = useState<WebSocket | null>(null)
  const [responseHandlers, setResponseHandlers] = useState<Map<number, (response: WebSocketResponse) => void>>(new Map())

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:3000/ws')
    setWs(websocket)

    websocket.onopen = () => {
      console.log('WebSocket is connected.')
    }

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      
      // Check if the data contains an error
      if (data.error) {
        console.error('WebSocket error:', data.error)
      }

      const handler = responseHandlers.get(data.id)
      if (handler) {
        handler(data)
        setResponseHandlers((prev) => {
          const newHandlers = new Map(prev)
          newHandlers.delete(data.id)
          return newHandlers
        })
      }
    }

    websocket.onerror = (error) => {
      console.log('WebSocket error:', error)
    }

    websocket.onclose = () => {
      console.log('WebSocket is closed.')
    }

    return () => {
      websocket.close()
    }
  }, [responseHandlers])

  const send = (request: WebSocketRequest) => {
    if (!ws) return;

    const id = Math.floor(Math.random() * 1000); // Generate a random ID
    const message = { id, ...request };
    
    ws.send(JSON.stringify(message));

    if (request.onResponse) {
      setResponseHandlers(prev => {
        const newHandlers = new Map(prev);
        if (typeof request.onResponse === 'function') {
          newHandlers.set(id, request.onResponse);
        }
        return newHandlers;
      });
    }
  };

  return (
    <WebSocketContext.Provider value={{ send }}>
      {children}
    </WebSocketContext.Provider>
  )
}
