import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            {/* tax types */}
            <ul className="nav nav-pills nav-fill border rounded mt-4 shadow-sm">
                <li className="nav-item">
                    <NavLink to={'employee'} className="nav-link">Employement</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'buisness'} className="nav-link" >Business</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'investment'} className="nav-link" >Investment </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'medical'} className="nav-link">Medical</NavLink>
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
        </>
    )
}
