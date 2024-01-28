import { useState } from 'react'
import StudentLogin from '../components/auth/StudentLogin'
import TeacherLogin from '../components/auth/TeacherLogin'

function Home() {
  const [role, setRole] = useState('student')

  return (
    <div className="text-center">
      <h1 className="text-4xl text-blue-500">Login</h1>
      <div className="card">
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {role === 'student' ? <StudentLogin /> : <TeacherLogin />}
      </div>
    </div>
  )
}

export default Home
