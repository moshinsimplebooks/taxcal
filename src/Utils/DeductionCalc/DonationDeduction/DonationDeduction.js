const DonationDeduction = (DonationalDeductions)=>{
    
    let totalDonationalDeductAmount = 0
    let DonationalTax = 0
    const rate = 0.33
    const maxCap = 75000
    if (DonationalDeductions.length > 0) {
        DonationalDeductions.forEach(tax => {
            totalDonationalDeductAmount += parseFloat(tax.yearTotAmt);
        });
        if(totalDonationalDeductAmount>75000)
            DonationalTax = (totalDonationalDeductAmount-maxCap)
        else if(totalDonationalDeductAmount<=75000)
            DonationalTax = (totalDonationalDeductAmount*rate)
    } else
    DonationalTax = 0
    
    let total = parseFloat(DonationalTax).toFixed(2)
    return total
}

export default DonationDeduction