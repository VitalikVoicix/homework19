import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom";




const Header = () => {
	return(
		<div className="wrapper">
			  <NavLink to ="/home">Home</NavLink>
			  <NavLink to  ="/posts">Posts</NavLink>
			  <NavLink to ="/photos">Photos</NavLink>
              <NavLink to ="/contacts">Contacts</NavLink>
		  </div>
	)
}

export default Header;