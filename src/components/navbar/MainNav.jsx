import React from 'react'
import { NavLink, useLocation,Navigate } from 'react-router-dom'

export default function MainNav() {
    const location = useLocation();

    const isActive = location.pathname === '/';

    if (isActive) {
        return <Navigate to="income/employee" />;
    }

    return (
        <div className="col-12 col-md-2">
            <div className=' mt-4 p-3 border rounded shadow-sm'>
                <h5 className='mb-3'>Choose Sources</h5>
                <nav className="nav nav-pills flex-column">
                    <NavLink to={'income/'} className={`nav-link ${isActive ? 'active' : ''}`}>Income</NavLink>
                    <NavLink to={'deduction/'} className="nav-link " >Deductions</NavLink>
                </nav>
            </div>
        </div>
    )
}
