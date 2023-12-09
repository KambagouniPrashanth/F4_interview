import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className='navbar'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Outlet/>
            {/* to get all children of navbar */}


        </div>
    )
}
export default Navbar