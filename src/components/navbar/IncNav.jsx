import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function IncNav() {
    const location = useLocation();

    const isActive = location.pathname === '/income/';

    return (
        <ul className="nav nav-pills nav-fill border rounded mt-4 shadow-sm">
            <li className="nav-item">
                <NavLink to={'employee'} className={`nav-link ${isActive ? 'active' : ''}`}>Employement</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'buisness'} className="nav-link" >Business</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'investment'} className="nav-link" >Investment </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'other'} className="nav-link" >Other</NavLink>
            </li>
        </ul>
    )
}
