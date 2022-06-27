import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import Register from "./register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <h1>TEST</h1>
    </div>
  );
}

export default App;
