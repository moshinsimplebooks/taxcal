const RentDeduction = (RentalDeductions)=>{
    
    let totalRentalDeductAmount = 0
    let RentalTax = 0
    const rate = 0.25
    if (RentalDeductions.length > 0) {
        RentalDeductions.forEach(tax => {
            totalRentalDeductAmount += parseFloat(tax.yearTotAmt);
        });
        RentalTax = (totalRentalDeductAmount*rate)
    } else
    RentalTax = 0
    
    let total = parseFloat(RentalTax).toFixed(2)
    return total
}

export default RentDeduction