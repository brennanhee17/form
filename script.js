// form selector
let submitEl = document.querySelector(".submit");
var elements = document.querySelector(".formA");

// form inputs
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const street = document.querySelector("#inputStreet");
const city = document.querySelector("#inputCity");
const state = document.querySelector("#inputState");
const zip = document.querySelector("#inputZip");
const pass = document.querySelector("#pass");

let validation = true;

submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  validateEmail(email.value);

//   let myForm = document.getElementById("form");
//   var formData = new FormData(form);

//   for (var i = 0; i < elements.length; i++) {
//     formData.append(elements[i].name, elements[i].value);
//   }
//   for (var key of formData.entries()) {
//     console.log(key[0] + " -> " + key[1]);
//   }

  // var elements = document.getElementById("form").elements;

  // for (var i = 0, element; element = elements[i++];) {
  //     if (element.type === "text" && element.value === "")
  //         console.log("it's an empty textfield")
  //         console.log(elements);
  // }

// if (fname.value === "") {
//     fname.classList.add("error");
//     validation = false;
// } else {
//     fname.classList.add("success");
//     validation = true;
// }

// if (lname.value === "") {
//     lname.classList.add("error");
//     validation = false;
// } else {
//     lname.classList.add("success");
//     validation = true;
// }

// if (street.value === "") {
//     street.classList.add("error");
//     validation = false;
// } else {
//     street.classList.add("success");
//     validation = true;
// }

// if (city.value === "") {
//     city.classList.add("error");
//     validation = false;
// } else {
//     city.classList.add("success");
//     validation = true;
// }

// if (state.value === "") {
//     state.classList.add("error");
//     validation = false;
// } else {
//     state.classList.add("success");
//     validation = true;
// }

// if (zip.value === "") {
//     zip.classList.add("error");
//     validation = false;
// } else {
//     zip.classList.add("success");
//     validation = true;
// }

// if (pass.value === "") {
//     pass.classList.add("error");
//     validation = false;
// } else {
//     pass.classList.add("success");
//     validation = true;
// }

// isValid(validation);

//   let myForm = document.getElementById("form");
//   var formData = new FormData(myForm);

//   for (var i = 0; i < elements.length; i++) {
//     formData.append(elements[i].name, elements[i].value);
//   }
//   for (var key of formData.entries()) {
//     console.log(key[0] + " -> " + key[1]);
//   }
});

function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      alert("Valid email address!");
      email.classList.add("success");
      validation = true;
      return true;
    } else {
      email.classList.add("error");
      validation = false;
      return false;
    }
  }

function isValid(form) {
    if (form === true) {
        console.log(`true ${form}`);
    } else {
        console.log(`false ${form}`);
    }
}