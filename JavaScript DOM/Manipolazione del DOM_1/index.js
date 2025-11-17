// Funzione per aggiungere un nuovo task
function addTask() {
  // Recupero gli elementi dal DOM
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  const text = input.value;

  if (!text) return; // Non aggiunge task vuoti

  // Creo un nuovo <li>
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);

  // Creo un checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Aggiungo checkbox all'elemento <li>
  li.appendChild(checkbox);

  // Svuoto l'input dopo aver aggiunto il task
  input.value = "";
}
