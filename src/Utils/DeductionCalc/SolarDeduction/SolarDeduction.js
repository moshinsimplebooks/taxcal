const SolarDeduction = (amount)=>{
    const rate = 0.5
    let total = parseFloat(amount*rate).toFixed(2)
    return total
}

export default SolarDeduction