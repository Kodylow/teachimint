import { useContext } from 'react'
import { WebSocketContext } from '../providers/WebsocketProvider'

export const useWebSocket = () => useContext(WebSocketContext)
