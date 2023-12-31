const formName = document.getElementById('name')
const formNumber = document.getElementById('number')
const formMonth = document.getElementById('month')
const formYear = document.getElementById('year')
const formCVC = document.getElementById('cvc')
const button = document.querySelector('#send')
const input = document.querySelectorAll('.input')
const form = document.querySelector('.form')
const confirmation = document.querySelector('.confirmation')


const cardName = document.querySelector('.card-front_info__name')
const cardNum = document.querySelector('.card-front_number')
const cardMonth = document.querySelector('.c-month')
const cardYear = document.querySelector('.c-year')
const cardCVC = document.querySelector('.card-back_cvc')
const expDate = document.querySelector('.form-date-format')


const num = formNumber.value;

const wrongYear = document.createElement('p')
wrongYear.textContent = 'Please insert a month between 1 and 12';
wrongYear.style.fontSize = '11px';
wrongYear.style.color = 'red'
wrongYear.style.marginTop = '3px'

const err = document.createElement('p')
err.textContent = `Exceeded limit`;
err.style.fontSize = '11px';
err.style.color = 'red'
err.style.marginTop = '3px'

//////////////////////

function formatStringWithSpaces(num) {
    // Use a regular expression to insert a space every 4 characters
    const formattedString = num.replace(/(\d{4})/g, '$1 ');
  
    // Trim any leading or trailing spaces
    return formattedString.trim();
  }
  
  // Example usage:
  const formattedInput = formatStringWithSpaces(num);

////////////////

input.forEach((e) =>{
    
    e.addEventListener('input', function(){
       if(e === formName){
        cardName.textContent = e.value
       } else if( e === formNumber){
            const formattedInput = formatStringWithSpaces(e.value);
            if(formattedInput.length <= 19){
                cardNum.textContent = formattedInput;
                err.remove()
            } else{
                formNumber.insertAdjacentElement('afterend', err)
            }
        } else if(e === formMonth){
            if(e.value.length <= 2){
                if(e.value > 12 || e.value <= 0 || e.value == null){
                    expDate.insertAdjacentElement('afterend', wrongYear)
                }else{
                cardMonth.textContent = e.value
                wrongYear.remove()}
            }
       } else if(e === formYear){
            if(e.value.length <= 2){
                cardYear.textContent = e.value
                err.remove()
            } else{
                expDate.insertAdjacentElement('afterend', err)
            }}
        else if(e === formCVC){
            if(e.value.length <= 3){
                cardCVC.textContent = e.value;
                err.remove()
            } else{
                expDate.insertAdjacentElement('afterend', err)
            }
    }
    })

})

button.addEventListener('click', formSend)

function formSend(){
    console.log('hello');
    form.classList.add('hidden')
    confirmation.classList.remove('hidden')

}


/*

    Fill in the form and see the card details update in real time
    Receive error messages when the form is submitted if:
        Any input field is empty
        The card number, expiry date, or CVC fields are in the wrong format
    View the optimal layout depending on their device's screen size
    See hover, active, and focus states for interactive elements on the page



*/