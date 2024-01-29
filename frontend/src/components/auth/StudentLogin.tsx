import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function StudentLogin() {
  const [classroom, setClassroom] = useState('')
  const [classrooms, setClassrooms] = useState<string[]>([])
  const navigate = useNavigate()
  
  useEffect(() => {
    // fetch('http://localhost:3000/classrooms')
    //   .then(response => response.json())
    //   .then(data => setClassrooms(data))
    //   .catch(error => console.error('Error:', error));
    setClassrooms(['Classroom 1', 'Classroom 2', 'Classroom 3']);
  }, []);

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    navigate(`/student/${classroom}`)
  }

  return (
    <form onSubmit={handleJoin} className="flex flex-col space-y-4">
      <select onChange={(e) => setClassroom(e.target.value)} className="p-2 border border-green-500 rounded">
        <option value="">Select a classroom</option>
        {classrooms.map((classroom, index) => (
          <option key={index} value={classroom}>
            {classroom}
          </option>
        ))}
      </select>
      <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
        Join
      </button>
    </form>
  )
}

export default StudentLogin
