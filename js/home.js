// add money
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    // step2
    const addMoneyInput =document.getElementById('add-money-input').value;
    console.log(addMoneyInput);
    // step3
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
    if(pinNumber === '1234'){
        console.log('adding money to your account');
// step4
const balance = document.getElementById('account-balance').innerText;
console.log(balance);
// step5
const addMoneyNumber = parseFloat(addMoneyInput);
const balanceNumber = parseFloat(balance);
const newBAlance = addMoneyNumber + balanceNumber;
console.log(newBAlance);
// step6
document.getElementById('account-balance').innerText = newBAlance;
    }else{
        console.log('please try again');
    }
})