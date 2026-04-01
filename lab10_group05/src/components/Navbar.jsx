
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="link ">
            <Link to={'/'} className="text-link">
               <p>Home</p>
            </Link>
            <Link to={'/content'} className="text-link">
               <p>Content</p>
            </Link>
            <Link to={'/member'} className="text-link">
               <p>Member</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar