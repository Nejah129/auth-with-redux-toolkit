import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";


function App() {


  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<SingUp/>} />
          <Route  path="/login" element={<SignIn/>} />
          <Route path="/user/:id" element={<Profile/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
