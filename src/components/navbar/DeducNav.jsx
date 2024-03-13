import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function DeducNav() {
    const location = useLocation();

    const isActive = location.pathname === '/deduction/';
    return (
        <ul className="nav nav-pills nav-fill border rounded mt-4 shadow-sm">
            <li className="nav-item">
                <NavLink to={'rental'} className={`nav-link ${isActive ? 'active' : ''}`}>Rental</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'solar'} className="nav-link">Solar Relief</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'donation'} className="nav-link">Donation</NavLink>
            </li>
        </ul>
    )
}
