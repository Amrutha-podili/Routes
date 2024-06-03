import React from 'react';
import {Link, Outlet} from 'react-router-dom' ;

function Usercomponent () {
  return (
    <>
    <h1>This is User component</h1> 
    <button><Link to="order">Orders</Link></button>
    <button><Link to="profile">Profile</Link></button>
    <Outlet/>
    </>
  )
}



export const Order = () => {
  return (
    <div>
        This is user orders component
    </div>
  )
}

export const Profile = () => {
  return (
    <div>
        This is user Profile component
    </div>
  )
}


export default Usercomponent;
