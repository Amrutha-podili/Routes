import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Aboutcomponent from './Aboutcomponent';
import React from 'react';
import './App.css';
import Contactuscomponent from './Contactuscomponent';
import Homecomponent from './Homecomponent';
import Logincomponent from './Logincomponent';
import Usercomponent from './Usercomponent';
import { Profile } from './Usercomponent';
import { Order } from './Usercomponent';
import Parentcomp from './Parentcomp';
// import Parentcomp from './Parentcomp';


function Header(){
  return(
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/user">User</Link></li>
    </ul>
    </>
  )
}

function App() {
  return (
  <>
  <Parentcomp/>
  <BrowserRouter>
  <Header/>
    <Routes>
        <Route exact path="/" element={<Homecomponent/>} />
        <Route path="/about" element={<Aboutcomponent/>} />
        <Route path="/contact" element={<Contactuscomponent/>} />
        <Route path="/login" element={<Logincomponent/>} />
        <Route path="/user" element={<Usercomponent/>}> 
            <Route path="order" element={<Order/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
  {/* <Parentcomp/> */}
  </>
  );
}

export default App;
