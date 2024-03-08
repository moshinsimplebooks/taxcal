import { useSelector } from 'react-redux';
import calculateTax from '../../Utils/EmployeeTaxer/EmpTaxer';

export default function TaxTotal() {

    const taxess = useSelector((state) => state.taxes)

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        let totalTaxAmount = 0;
        taxess.forEach(tax => {
            totalAmount += parseFloat(tax.yearTotAmt);
        });
        totalTaxAmount = calculateTax(totalAmount)
        return parseFloat(totalTaxAmount).toFixed(2);
    };

    const totalTax = calculateTotalAmount();
    const totalQuart = parseFloat(totalTax / 4).toFixed(2)
    // Use the format specifier for comma as a thousand separator
    // let formatted_number = "{:,.2f}".format(t)
    return (
        <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Quarterly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalQuart}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-center shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">Total Tax Payable Yearly</h5>
                        <h2 className='text-danger fw-bolder'>Rs {totalTax}</h2>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
