/**
 * Modifique o formulário de "Estou Interessado"
 * disponível em https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022
 *
 * Adicione os seguintes campos:
 *
 * - 1 Select com as opções: SUV,  Senda, Hatch e Pickup;
 * - 1 Textarea com placeholder "Mensagem".
 */

// Seleciona o primeiro fieldset do formulário, contendo os inputs
const firstFieldset = document.querySelector(
  ".form-conversion__body"
).firstChild;

// ----------------------- ADICIONANDO SELECT -----------------------

// Cria um select para representar os tipos de carros
const carSelect = document.createElement("select");
// Adiciona classe o select de tipos de carros
carSelect.className = "form-control";

// Cria a primeira opção disabled que pede ao usuário para selecionar um filtro
carSelect.innerHTML = "<option disabled selected>Tipo do carro</option>";
// Array com as opções para o select
const selectOptions = ["SUV", "Sedan", "Hatch", "Pickup"];
// Adiciona as opções ao select
for (const value of selectOptions) {
  const optEl = document.createElement("option");
  optEl.innerHTML = value;
  optEl.value = value;
  carSelect.appendChild(optEl);
}

// Cria um wrapper para o select de tipo de carros
const selectWrapper = document.createElement("div");
// Adicina classe ao wrapper
selectWrapper.className = "form-group";
// Adiciona o select de tipos de carros dentro do wrapper
selectWrapper.appendChild(carSelect);

//Adiciona o elemento completo ao final do fieldset, logo após os inputs
firstFieldset.appendChild(selectWrapper);

// ----------------------- ADICIONANDO TEXTAREA -----------------------

// Cria o elemento textarea
const textarea = document.createElement("textarea");
// Adiciona classe e placeholder ao elemento textarea
textarea.className = "form-control";
textarea.placeholder = "Mensagem";

// Cria um wrapper para o textarea
const textareaWrapper = document.createElement("div");
// Classe para o wrapper do textarea
textareaWrapper.className = "form-group";
// Adiciona o textarea dentro do wrapper
textareaWrapper.appendChild(textarea);
// Adiciona o elemento completo ao final do fieldset, logo após o select
firstFieldset.appendChild(textareaWrapper);
