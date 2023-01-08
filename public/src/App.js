
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import Payment from './components/Payment';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/api/dashboard" element={<Dashboard />} />
        <Route path="/api/payments" element={<Payment/>} />
      </Routes>
      
    </Router>
       
    </div>
  );
}

export default App;