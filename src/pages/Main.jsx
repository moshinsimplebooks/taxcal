import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import TaxTotal from '../components/TotalTax/TaxTotal'
import { Outlet } from 'react-router-dom'
import LocalStore from '../Utils/LocalStore/LocalStore'
import Toaster from '../Utils/Toaster/Toaster'
import { ToastContainer } from 'react-toastify'
import MainNav from '../components/navbar/MainNav'

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
            <ToastContainer />
            {/* side navbatr */}
            <div className="container">
                {/* header */}
                <Header />
                {/* cards */}
                <TaxTotal />
                <div className="row">
                    <MainNav />
                    <div className="col-10">
                        {/* router */}
                        {/* <Navbar /> */}
                        {/* outlet */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
