import { useSelector } from 'react-redux';
import calculateTax from '../../Utils/EmployeeTaxer/EmpTaxer';
import RentDeduction from '../../Utils/DeductionCalc/RentDeduction/RentDeduction';
import SolarDeduction from '../../Utils/DeductionCalc/SolarDeduction/SolarDeduction';

export default function TaxTotal() {

    const taxes = useSelector((state) => state.taxes)
    const filterIncomes = taxes.filter(tax => tax.taxType === "income")
    const filterDeductions = taxes.filter(tax => tax.taxType === "deduction")

    let totalDeductAmount = 0
    let totalIncomeAmount = 0
    filterDeductions.forEach(tax => {
        totalDeductAmount += parseFloat(tax.yearTotAmt);
    });
    filterIncomes.forEach(tax => {
        totalIncomeAmount += parseFloat(tax.yearTotAmt);
    });

    //caclulate the deduction based on the deduction type
    let rentalDeductions = filterDeductions.filter(tax => tax.source === "dedRental")
    let rentalTax = 0;
    rentalTax = RentDeduction(rentalDeductions)

    // for solar calculations
    let solarDeductions = filterDeductions.filter(tax => tax.source === "dedSolar")
    let solarTax = 0
    solarTax = SolarDeduction(solarDeductions)

    let calculateTotalAmount = () => {
        // calculate the deduction totals
        let taxablePay = 0;
        let totalTaxAmount = 0;
        taxablePay = parseFloat(totalIncomeAmount).toFixed(2) - (parseFloat(rentalTax) + parseFloat(solarTax))
        totalTaxAmount = calculateTax(taxablePay)
        return parseFloat(totalTaxAmount).toFixed(2);
    };
    let totalYearlyTax = calculateTotalAmount();
    let totalQuartlyTax = parseFloat(totalYearlyTax / 4).toFixed(2)
    return (
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Quarterly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalQuartlyTax}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Yearly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalYearlyTax}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
