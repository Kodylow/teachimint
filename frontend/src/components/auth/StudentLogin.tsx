import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function StudentLogin() {
  const [classroom, setClassroom] = useState('')
  const [classrooms, setClassrooms] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('http://localhost:3000/classrooms')
      .then(response => response.json())
      .then(data => setClassrooms(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    navigate(`/student/${classroom}`)
  }
  return (
    <form onSubmit={handleJoin}>
      <select onChange={(e) => setClassroom(e.target.value)}>
        <option value="">Select a classroom</option>
        {classrooms.map((classroom, index) => (
          <option key={index} value={classroom}>
            {classroom}
          </option>
        ))}
      </select>
      <button type="submit">Join</button>
    </form>
  )
}

export default StudentLogin
