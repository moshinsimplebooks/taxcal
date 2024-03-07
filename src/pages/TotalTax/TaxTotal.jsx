import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function TaxTotal() {
    
    const taxess = useSelector((state)=> state.taxes)

    const calculateTotalTax = () => {
        let totalAmount = 0;
        taxess.forEach(tax => {
            totalAmount += parseFloat(tax.amount);
        });
        return parseFloat(totalAmount).toFixed(2) ;
    };
    const totalTax = calculateTotalTax(); // Calculate total tax once
    const total2023 = totalTax
    const total2024 = (parseFloat(totalTax) * 2.75).toFixed(2);
    return (
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable for 22/23</h5>
                        <h2 className='text-danger fw-bolder'>Rs {total2023}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable From 2024</h5>
                        <h2 className='text-danger fw-bolder'>Rs {total2024}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
