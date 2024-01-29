import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem('token', token)
      navigate('/teacher')
    } else {
      // Handle error
      console.error('Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col space-y-4">
      <input className="p-2 border border-green-500 rounded" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="p-2 border border-green-500 rounded" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors" type="submit">Login</button>
    </form>
  )
}

export default TeacherLogin
