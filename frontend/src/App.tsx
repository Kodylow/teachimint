import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WebSocketProvider } from "./providers/WebsocketProvider";
import "./App.css";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <WebSocketProvider>
      <div className="text-green-500 font-mono">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:classroom" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </Router>
      </div>
    </WebSocketProvider>
  );
}

export default App;
