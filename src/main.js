import './style.css'

const form = document.getElementById("form");
const errorMsg = document.querySelectorAll(".error");
const errorMsgB = document.querySelectorAll(".errorB");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const msgSent = document.getElementById("messageSent");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [firstName, lastName, email, message];

    let filledForm = true;

    fields.forEach((inputFields, index) => {
        if(inputFields.value === ""){
            inputFields.style.borderColor = "hsl(349, 82%, 27%)";

            errorMsg[index].classList.remove("hidden");
            setTimeout(() => {
                errorMsg[index].classList.add("hidden");
            }, 1000);

            setTimeout(() => {
                inputFields.style.borderColor = "";
            }, 1000);
            filledForm = false;
        }
    });

    const query = document.querySelector("input[name='query']:checked");
    const consent = document.querySelector("input[name='consent']:checked");
    const selection = [query, consent];

    selection.forEach((inputFields, index) => {
        if(inputFields === null){
            errorMsgB[index].classList.remove("hidden");
            setTimeout(() => {
                errorMsgB[index].classList.add("hidden");
            }, 1000);
            filledForm = false;
        }
    });

    if(filledForm === true){
        msgSent.style.opacity = '1';

        setTimeout(() => {
            msgSent.style.opacity = '';
        }, 2000);
    }
});