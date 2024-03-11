const SolarDeduction = (solarDeductions)=>{
    let totalSolarDeductAmount = 0
    let solarTax = 0
    const rate = 0.5
    if (solarDeductions.length > 0) {
        solarDeductions.forEach(tax => {
            totalSolarDeductAmount += parseFloat(tax.yearTotAmt);
        });
        solarTax = totalSolarDeductAmount*rate
    } else {
        solarTax = 0
    }

    let total = parseFloat(solarTax).toFixed(2)
    return total
}

export default SolarDeduction