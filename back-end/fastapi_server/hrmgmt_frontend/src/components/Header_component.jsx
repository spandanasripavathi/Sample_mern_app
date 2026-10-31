import './Header_com.css'

import { Link,useLocation } from 'react-router-dom'

function Header_component(){
   useLocation()
   let curentuser=JSON.parse(localStorage.getItem("currentuser"))|| "null"
  return(
    <div>
      <div classname="header">
        {/* common menus */}
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
      {/* if not logged in*/}

      {!currentuser &&()}
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      </div>
    </div>
  )
}
export default Header_component