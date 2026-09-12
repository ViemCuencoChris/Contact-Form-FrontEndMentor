import './style.css'

const form = document.getElementById("form");
const errorMsg = document.querySelectorAll(".error");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const query = document.querySelector("input[name='query']:checked");
const message = document.getElementById("message");
const consent = document.querySelector("input[name='consent']:checked");

const fields = [firstName, lastName, email, query, message, consent];

let index = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fields.forEach((inputFields) => {
        if(inputFields.value == "" || inputFields.value == null){
            inputFields.style.borderColor = "hsl(349, 82%, 27%)";

            errorMessage(index);

            setTimeout(() => {
                inputFields.style.borderColor = "";
            }, 1000);

            index++;
        } else{
            index++;
        }
    });

    selection.forEach((option) => {
        if(option == null){
            
        }
    });
});

function errorMessage(index){
    errorMsg[index].classList.remove("hidden");
    setTimeout(() => {
        errorMsg[index].classList.add("hidden");
    }, 1000);
}