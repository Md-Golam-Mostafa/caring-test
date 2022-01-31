import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import UserDetails from "./components/Users/UserDetails";

function App() {

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user/:user_id" element={<UserDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
