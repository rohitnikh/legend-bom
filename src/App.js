//import logo from './logo.svg';
import './App.css';
import Login from './LoginPage/LoginPage';
import Register from './RegisterPage/RegisterPage'
import Home from './HomePage/HomePage'
import Success from './SuccessPage/SuccessPage'
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="app">
     <Routes>
       <Route exact path="/login" element={<Login />} />   
       <Route exact path="/register" element={ <Register />} />
       <Route exact path="/" element={ <Home />} />
       <Route exact path="/success" element={ <Success />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
