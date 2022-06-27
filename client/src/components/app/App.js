import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Login from "../login/Login";
import Register from "../register/Register";
import AdminPanel from "../adminPanel/AdminPanel";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin_panel" element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
