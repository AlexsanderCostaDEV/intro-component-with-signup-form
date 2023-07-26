function sendForm() {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    // console.log(name + " - " + lastName + " - " + email + " - " + password)

    let display1 = document.querySelector('.error1');
    let display2 = document.querySelector('.error2');
    let display3 = document.querySelector('.error3');
    let display4 = document.querySelector('.error4');
    let imgError1 = document.querySelector('.img-error1');
    let imgError2 = document.querySelector('.img-error2');
    let imgError3 = document.querySelector('.img-error3');
    let imgError4 = document.querySelector('.img-error4');

    if (name.value === "") {
        name.style.borderColor = 'hsl(0, 100%, 74%)';
        display1.style.display = 'block';
        imgError1.style.display = 'block';
    } else {
        name.style.borderColor = 'hsl(246, 25%, 77%)';
        display1.style.display = 'none';
        imgError1.style.display = 'none';
    }
    if (lastName.value === "") {
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
        display2.style.display = 'block';
        imgError2.style.display = 'block';
    } else {
        lastName.style.borderColor = 'hsl(246, 25%, 77%)';
        display2.style.display = 'none';
        imgError2.style.display = 'none';
    }
    if (email.value === "") {
        email.style.borderColor = 'hsl(0, 100%, 74%)';
        display3.style.display = 'block';
        imgError3.style.display = 'block';
    } else if (!validateEmail(email.value)) {
        email.style.borderColor = 'hsl(0, 100%, 74%)';
        display3.innerHTML = 'Looks like this is not on email'
        display3.style.display = 'block';
        imgError3.style.display = 'block';
    } else if (validateEmail(email.value)) {
        email.style.borderColor = 'hsl(246, 25%, 77%)';
        display3.style.display = 'none';
        imgError3.style.display = 'none';
    } else {
        email.style.borderColor = 'hsl(246, 25%, 77%)';
        display3.style.display = 'none';
        imgError3.style.display = 'none';
    }
    if (password.value === "") {
        password.style.borderColor = 'hsl(0, 100%, 74%)';
        display4.style.display = 'block';
        imgError4.style.display = 'block';
    } else {
        password.style.borderColor = 'hsl(246, 25%, 77%)';
        display4.style.display = 'none';
        imgError4.style.display = 'none';
    }
    if (name.value !== "" && lastName.value !== "" && email.value !== "" && password.value !== "") {
        document.querySelector('#name').value = "";
        document.querySelector('#last-name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#password').value = "";
        display1.style.display = 'none';
        display2.style.display = 'none';
        display3.style.display = 'none';
        display4.style.display = 'none';
    }
}
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}