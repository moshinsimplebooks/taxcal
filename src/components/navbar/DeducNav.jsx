import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function DeducNav() {
    const location = useLocation();

    const isActive = location.pathname === '/deduction/';
    return (
        <ul className="nav nav-pills nav-fill border rounded mt-4 shadow-sm">
            <li className="nav-item">
                <NavLink to={'medical'} className={`nav-link ${isActive ? 'active' : ''}`}>Medical</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'housing'} className="nav-link">Housing Loan</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'educational'} className="nav-link">Educational</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'donations'} className="nav-link">Donations</NavLink>
            </li>
        </ul>
    )
}
