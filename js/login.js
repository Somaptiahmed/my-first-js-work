// console.log('button clicking file added');
// step1
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step2
//     event.preventDefault();
    
// // step3
// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber);
// console.log(pinNumber);
// // step4
// if(phoneNumber === '5' && pinNumber === '1234'){
//     console.log('you are logged in');

// }else{
//     alert('wrong phone number pr pin');
// }

// })


document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
   
    if(phoneNumber === '5' && pinNumber === '1234'){
             console.log('you are logged in');
             window.location.href = '/home.html';
        
         }else{
             alert('wrong phone number or pin');
         }
})
