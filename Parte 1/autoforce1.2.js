const firstFieldset = document.querySelector(
  ".form-conversion__body"
).firstChild;

//-------------------------------------------------

const carSelect = document.createElement("select");
carSelect.className = "form-control";

carSelect.innerHTML = "<option disabled selected>Tipo do carro</option>";
const selectOptions = ["SUV", "Sedan", "Hatch", "Pickup"];
for (const value of selectOptions) {
  const optEl = document.createElement("option");
  optEl.innerHTML = value;
  optEl.value = value;
  carSelect.appendChild(optEl);
}

const selectWrapper = document.createElement("div");
selectWrapper.className = "form-group";
selectWrapper.appendChild(carSelect);

firstFieldset.appendChild(selectWrapper);

// ----------------------------------------------
const textarea = document.createElement("textarea");
textarea.className = "form-control";
textarea.placeholder = "Mensagem";

const textareaWrapper = document.createElement("div");
textareaWrapper.className = "form-group";
textareaWrapper.appendChild(textarea);
firstFieldset.appendChild(textareaWrapper);
