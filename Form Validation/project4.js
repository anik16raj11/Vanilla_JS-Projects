console.log('This is the form validation project');

const uname = document.getElementById('uname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUname = false;
$('#success').hide();
$('#failure').hide();


// console.log(name, email, phone );


uname.addEventListener('blur', () => {
    console.log("Name is blured");
    //validate name here:
    let regEx = /^[A-Za-z]([0-9a-zA-Z]){2,10}$/;
    let str = uname.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log("Your name is valid");
        uname.classList.remove('is-invalid');
        validUname = true;
    }
    else {
        console.log("Your name is invalid");
        uname.classList.add('is-invalid');
        validUname = false;
    }
});



email.addEventListener('blur', () => {
    console.log("Email is blured");
    //validate email here:
    let regEx = /^([_\-\.A-Za-z0-9]+)@([_\-\.A-Za-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("Your email is invalid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});



phone.addEventListener('blur', () => {
    console.log("Phone Number is blured");
    //validate phone number here:
    let regEx = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log("Your Phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log("Your Phone number is invalid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});



let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validUname, validEmail, validPhone);

    //Submit your form here
    if(validUname && validEmail && validPhone) {
        
        console.log("phone, Uname and Email are valid. Submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('failure').alert('hide');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log("one of phone, Uname and Email are invalid. Hence not submitting the form, please correct and try again");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }
})
