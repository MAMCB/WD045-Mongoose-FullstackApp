import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/events/new">New Event</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar