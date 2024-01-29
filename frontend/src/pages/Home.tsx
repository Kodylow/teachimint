import { useState } from 'react'
import StudentLogin from '../components/auth/StudentLogin'
import TeacherLogin from '../components/auth/TeacherLogin'

function Home() {
  const [role, setRole] = useState('student')

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl text-green-500 mb-4">Login</h1>
        <div className="mb-4">
          <select
            className="w-full p-2 border border-green-500 rounded" 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {role === 'student' ? <StudentLogin /> : <TeacherLogin />}
      </div>
    </div>
  )
}

export default Home
