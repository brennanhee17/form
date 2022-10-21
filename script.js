// form selector
let submitEl = document.querySelector(".submit");
var elements = document.querySelector(".formA");

let validation = true;

submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  let myForm = document.getElementById("form");
  var formData = new FormData(form);

  for (var i = 0; i < elements.length; i++) {
    formData.append(elements[i].name, elements[i].value);
    if (elements[i].value === "") {
      if (elements[i].name === "apartment") {
        validation = true;
        elements[i].classList.add("blank");
      } else {
        validation = false;
        elements[i].classList.add("error");
      }
    } else if (elements[i].name === "email") {
      if (validateEmail(email.value)) {
        validation = true;
        elements[i].classList.add("success");
      } else {
        validation = false;
        elements[i].classList.add("error");
      }
    } else if (elements[i].name === "phone") {
      if (validatePhone(phone.value)) {
        validation = true;
        elements[i].classList.add("success");
      } else {
        validation = false;
        elements[i].classList.add("error");
      }
    } else {
      validation = true;
      elements[i].classList.add("success");
    }
  }
});

function validateEmail(inputText) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    alert("Valid email address!");
    return true;
  } else {
    return false;
  }
}

function validatePhone(inputText) {
  var phoneFormat = /^\d{3}-\d{3}-\d{4}$/;
  if (inputText.match(phoneFormat)) {
    alert("Valid phone number!");
    return true;
  } else {
    return false;
  }
}

// function isValid(form) {
//   if (form === true) {
//     console.log(`true ${form}`);
//   } else {
//     console.log(`false ${form}`);
//   }
// }
