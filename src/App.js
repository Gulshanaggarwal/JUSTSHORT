import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import Protected from "./Components/Protected/Protected";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={true} element={<Login/>}/>
        <Route path="/register" caseSensitive={true} element={<Register/>}/>
        <Route path="/dashboard" caseSensitive={true} element={<Protected/>}/>
      </Routes>
    </Router>
  );
}

export default App;
