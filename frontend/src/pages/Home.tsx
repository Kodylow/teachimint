import { Login } from "../components/auth/Login";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <Login />
      </div>
    </div>
  );
}

export default Home;
