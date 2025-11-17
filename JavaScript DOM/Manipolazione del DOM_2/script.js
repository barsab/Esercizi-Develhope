// Recupero i valori dagli input
const firstNameValue = document.getElementById("firstName").value;
const lastNameValue = document.getElementById("lastName").value;
const ageValue = document.getElementById("age").value;

// Creo l'oggetto person con le proprietà richieste
const person = {
  firstName: firstNameValue,
  lastName: lastNameValue,
  age: parseInt(ageValue),
};
console.log("Oggetto person:", person);

// Recupero l'elemento form e aggiungo l'attributo data-person con l'oggetto person in formato JSON
const form = document.querySelector("form");
form.setAttribute("data-person", JSON.stringify(person));
console.log("Attributo data-person:", form.getAttribute("data-person"));
