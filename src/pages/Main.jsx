import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Employee from './Employee/Employee'
import TaxTotal from './TotalTax/TaxTotal'
import { Outlet } from 'react-router-dom'
import LocalStore from '../Utils/LocalStore/LocalStore'
import Toaster from '../Utils/Toaster/Toaster'
import { ToastContainer } from 'react-toastify'

export default function Main() {
    const [taxes, setTaxes] = useState(['']);

    useEffect(() => {
        // Get taxes from local storage on component mount
        const savedTaxes = LocalStore.getTax();
        if (savedTaxes) {
            const parsedTaxes = JSON.parse(savedTaxes);
            setTaxes(parsedTaxes);
        } else {
            setTaxes([]); // Set taxes to an empty array if there are no saved taxes
        }
    }, []); 

    return (
        <>
            <ToastContainer/>
            <div className="container">
                {/* header */}
                <Header />
                {/* cards */}
                <TaxTotal/>
                {/* router */}
                <Navbar />
                {/* outlet */}
                <Outlet />
            </div>
        </>
    )
}
