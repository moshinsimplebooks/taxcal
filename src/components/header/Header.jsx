import React from 'react'

export default function Header() {
    return (
        <>
            <nav className="navbar bg-white">
                <div className="container-fluid">
                    <a className="w-100 navbar-brand d-flex justify-content-between align-items-center">
                        <img src="https://simplebooks.com/wp-content/uploads/2020/02/logo-pn1.png" alt="Logo" width={200} />
                        <h4 className='my-0 fw-bolder'>Tax Calculator</h4>
                    </a>
                </div>
            </nav></>
    )
}
