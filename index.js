const prompt = require('prompt-sync')() // exernal code available in node_modules file 
// Compound interest calculator that prompts a user for some inputs, and finally calculates the compound interest value

//let initial_amount = 20000
//let monthly_contribution = 400
//let number_of_years = 30
//let interest_rate = 10
// step 1 - define a function that we can use to calculate the final value of the compound interest

function compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate){
    let total = initial_amount
    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
        total = total + annual_contribution
        total = total * ((100 + interest_rate)/100)
    }

    return total.toFixed(2)

}



// step 2 - define a function that would calculate the difference (i.e the effect that compounding has had)

function regularAmount(initial_amount,monthly_contribution, number_of_years) {
    let regular_amount = initial_amount + (monthly_contribution * 12) * number_of_years


    return regular_amount.toFixed(2)
}

// step 4 - inside of said function, make a print statement using a template literal string that gives the financial breakdown
function printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate) {
    let final_value = compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate)
    let value_without_compound = regularAmount(initial_amount, monthly_contribution, number_of_years)
    let summary = `Initial amount: $${initial_amount}\nMonthly contribution: $${monthly_contribution}
    \nNumber of years: ${number_of_years}\nInterest Rate: ${interest_rate}%\n
    \nFinal compound value: $${final_value}\nRegular amount $${value_without_compound}\nDifference: $${final_value - value_without_compound}`
    console.log(summary)
}
// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run() {
    let initial_amount = parseInt(prompt('what is your initial investment ($) ? '))
    let monthly_contribution = parseInt(prompt('what is your monthly contribution ($) ? '))
    let number_of_years = parseInt(prompt('for how many years would you like to compound your investment ? '))   
    let interest_rate = parseInt(prompt('what is your expected interest rate (%) over these years? '))

    printOutput(initial_amount,monthly_contribution,number_of_years,interest_rate)

}


run()