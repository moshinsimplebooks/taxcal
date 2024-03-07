import React from 'react'

export default function MainNav() {
    return (
        <div className=' mt-4 border rounded shadow-sm'>
            <nav className="nav nav-pills flex-column">
                <a className="nav-link active" >Income</a>
                <a className="nav-link " >Deductions</a>
            </nav>
        </div>

    )
}
