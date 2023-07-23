let myError = document.querySelector("#error");
let form = document.querySelector('form');
const validMail = document.querySelector('#email-address');

function myErrorMessage() {
  if (validMail.value.trim() === '') {
    let form = validMail.parentElement;
    let errorMsg = form.querySelector('small');
    errorMsg.style.display = 'block';
    errorMsg.textContent = "field is empty";
    form.classList.add('error');
    form.classList.remove('success');
  }
   else {
    let form = validMail.parentElement;
    let errorMsg = form.querySelector('small');
    errorMsg.style.display = 'none';
    form.classList.remove('error');
    form.classList.add('success');
  }

};



form.addEventListener('submit', (e) => {
  e.preventDefault()
  myErrorMessage()
  console.dir(e)

});

// // email regress
// function validAdd(validMail) {
//   let EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]
//   { 1, 3 } \.[0 - 9]{ 1, 3 } \.[0 - 9]{ 1, 3 }])| (([a - zA - Z\-0 - 9] +\.) +[a - zA - Z]{ 2,})) $ /
//      return EmailReg.test(validMail);
// };