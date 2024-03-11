const RentDeduction = (amount)=>{
    const rate = 0.4
    let total = parseFloat(amount*rate).toFixed(2)
    return total
}

export default RentDeduction