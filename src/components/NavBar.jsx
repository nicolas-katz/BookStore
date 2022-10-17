import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink 
                    className={({isActive}) => {
                        return isActive ? 'is-active' : undefined
                    }}
                    to="/">
                    Home
                </NavLink></li>
                <li><NavLink 
                    className={({isActive}) => {
                        return isActive ? 'is-active' : undefined
                    }} 
                    to="/create">
                    Create
                </NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar