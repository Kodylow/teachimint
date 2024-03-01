import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WebSocketProvider } from "./providers/WebsocketProvider";
import "./App.css";
import { Login } from "./pages/Login";
import { Student } from "./pages/Student";
import Teacher from "./pages/Teacher";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <WebSocketProvider>
      <div className="text-green-500 font-mono relative bg-gray-600">
        <Router>
          <Navbar />
          <div className="flex items-center justify-center p-10 mt-[60px] h-[calc(100vh-60px)]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/student/:classroom" element={<Student />} />
              <Route path="/teacher" element={<Teacher />} />
            </Routes>
          </div>
        </Router>
      </div>
    </WebSocketProvider>
  );
}

export default App;
