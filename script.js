const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
function showMsg()
{
    if(pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special))
    {
        p.textContent = "You have a very strong password"
        p.style.color = "lime"
    }
    else if(pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers))
    {
        p.textContent = "You have a good password"
        p.style.color = "gold"
    }
    else
    {
        p.textContent = "You have a weak password"
        p.style.color = "tomato"
    }
}
function checkPassword()
{
    if(pass.value.length !== 0)
    {
        showMsg()
    }
    else
    {
        p.textContent = "You did not enter your password..."
        p.style.color = ""
    }
}
pass.addEventListener('keyup', checkPassword)