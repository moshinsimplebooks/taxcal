import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import calculateTax from '../../Utils/EmployeeTaxer/EmpTaxer';

export default function TaxTotal() {
    
    const taxess = useSelector((state)=> state.taxes)

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        let totalTaxAmount = 0;
        taxess.forEach(tax => {
            totalAmount += parseFloat(tax.amount);
        });
        if(totalAmount>100000){
            totalTaxAmount = calculateTax(totalAmount)
        }
        return parseFloat(totalTaxAmount).toFixed(2) ;
    };
    const calculateTotalTax = () => {
        let totalTax = 0;
        taxess.forEach(tax => {
            totalTax += parseFloat(tax.taxToPayMon);
        });
        return parseFloat(totalTax).toFixed(2) ;
    };
    const totalTax = calculateTotalTax(); // Calculate total tax once
    const totalMon = totalTax*4
    const totalYear = (parseFloat(totalTax) *12).toFixed(2);
    console.log(calculateTotalAmount())
    return (
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Quarterly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalMon}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Yearly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalYear}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
