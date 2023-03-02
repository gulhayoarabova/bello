import './App.css';
import Main from './components/pages/Main/Main';
import Chart from './components/pages/Chart/Chart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/pages/Auth/Login';
import SuccessfulPage from './components/pages/SuccessfulPage/SuccessfulPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/successpage" element={<SuccessfulPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
