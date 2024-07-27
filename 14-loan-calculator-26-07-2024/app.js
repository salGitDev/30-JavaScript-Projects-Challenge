function calculateLoan(loanAmtVal, intRateVal, mntToPayVal, intAmt, mntlyPaymentVal){
    loanAmtVal      = Number(document.getElementById("loan-amount").value);
    intRateVal      = Number(document.getElementById("interest-rate").value);
    mntToPayVal     = Number(document.getElementById("month-to-pay").value);
    intAmt          = (loanAmtVal * (intRateVal * .01)) / mntToPayVal;
    mntlyPaymentVal = (loanAmtVal / mntToPayVal + intAmt);
    document.getElementById("payment").innerHTML = `Monthly Payment: $${mntlyPaymentVal.toFixed(2)}` 
}
