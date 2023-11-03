const formName = document.getElementById('name')
const formNumber = document.getElementById('number')
const formMonth = document.getElementById('month')
const formYear = document.getElementById('year')
const formCVC = document.getElementById('cvc')
const button = document.querySelector('button')
const input = document.querySelectorAll('input')

const cardName = document.querySelector('.card-front_info__name')
const cardNum = document.querySelector('.card-front_number')
const cardMonth = document.querySelector('.c-month')
const cardYear = document.querySelector('.c-year')
const cardCVC = document.querySelector('.card-back_cvc')

const num = formNumber.value


//////////////////////

function formatStringWithSpaces(num) {
    // Use a regular expression to insert a space every 4 characters
    const formattedString = num.replace(/(\d{4})/g, '$1 ');
  
    // Trim any leading or trailing spaces
    return formattedString.trim();
  }
  
  // Example usage:
  const formattedInput = formatStringWithSpaces(num);
  console.log(formattedInput);
  

////////////////

input.forEach((e) =>{
    
    e.addEventListener('input', function(){
       if(e === formName){
        cardName.textContent = e.value
       } else if( e === formNumber){
            const formattedInput = formatStringWithSpaces(e.value);
           cardNum.textContent = formattedInput
        } else if(e === formMonth){
        cardMonth.textContent = e.value
       } else if(e === formYear){
        cardYear.textContent = e.value} 
        else if(e === formCVC){
            cardCVC.textContent = e.value;
    }
    })

})


/*

    Fill in the form and see the card details update in real time
    Receive error messages when the form is submitted if:
        Any input field is empty
        The card number, expiry date, or CVC fields are in the wrong format
    View the optimal layout depending on their device's screen size
    See hover, active, and focus states for interactive elements on the page



*/