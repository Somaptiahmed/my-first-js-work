document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    console.log('cashout button clicked');
const cashOut = document.getElementById('cashout-money-input').value;
const cashOutNumber = parseFloat(cashOut);
const pinNumber = document.getElementById('cashout-money-pin-input').value;
console.log(cashOut);
console.log(pinNumber);
if(pinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
   const newBAlance = balanceNumber - cashOutNumber;
   document.getElementById('account-balance').innerText = newBAlance;
}else{
    alert('please try again');
}

})
