import { useParams } from 'react-router-dom';

function Teacher() {
  const { classroom } = useParams();

  // Now you can use the classroom variable in your component

  return (
    <div>
      {/* Use classroom variable here */}
    </div>
  );
}

export default Teacher;
