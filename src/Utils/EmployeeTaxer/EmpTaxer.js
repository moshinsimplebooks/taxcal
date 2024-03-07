function calculateTax(monthlySalarys) {
    
    if (monthlySalarys < 100000) {
        return 0;
    }
    let monthlySalary = (monthlySalarys*12)
    const taxBrackets = [
        { upperLimit: 500000, rate: 0.06 },
        { upperLimit: 1000000, rate: 0.12 },
        { upperLimit: 1500000, rate: 0.18 },
        { upperLimit: 2000000, rate: 0.24 },
        { upperLimit: 2500000, rate: 0.30 },
        { upperLimit: Infinity, rate: 0.36 } 
    ];

    let tax = 0;
    let remainingSalary = monthlySalary-1200000;

    for (let i = 0; i < taxBrackets.length; i++) {
        const bracket = taxBrackets[i];
        const taxableAmount = Math.min(remainingSalary, bracket.upperLimit - (taxBrackets[i-1]?.upperLimit || 0));
        
        if (taxableAmount <= 0) {
            break;
        }
        
        tax += taxableAmount * bracket.rate;
        remainingSalary -= taxableAmount;

        if (remainingSalary <= 0) {
            break;
        }
    }

    return tax;
}

// // Monthly salary is 600,000
// let monthlySalary = 600000;
// let tax = calculateTax(monthlySalary)/12;
// console.log(`The tax for the monthly salary of LKR ${monthlySalary} is: LKR ${tax.toFixed(2)}`);

// // Monthly salary is 80,000 (below the no-tax threshold)
// monthlySalary = 100000;
// tax = calculateTax(monthlySalary);
// console.log(`The tax for the monthly salary of LKR ${monthlySalary} is: LKR ${tax.toFixed(2)}`);

export default calculateTax
