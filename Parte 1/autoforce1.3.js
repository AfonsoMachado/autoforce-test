/**
 * 3. Remova o formulário de conversão após clique no whatsapp
 *
 * Ao clicar em qualquer link do dropdown de Whatsapp, um formulário modal é aberto
 *
 * - Remova a aparição deste formulário de forma que o usuário seja direcionado
 *   para janela do Whatsapp em uma nova aba.
 *
 */

// Seleciona todos os botões de WhatsApp
const whatsButtons = document.querySelectorAll(".button--whatsapp");
// URL do WhatsApp
const whatsUrl = "https://wa.me/send?phone=5583988971010";

// Para cada botão de WhatsApp, remove todos os eventos do mesmo e em seguida
// Adiciona o atributo 'onclick' para redirecionar para a URL do WhatsApp em uma nova aba
for (const whatsButton of whatsButtons) {
  recreateNode(whatsButton);
  whatsButton.setAttribute("onclick", `window.open("${whatsUrl}", "_blank")`);
}

/** Função para remover todos os eventos de um elemento */
function recreateNode(el) {
  // Cria um clone do elemento (os eventos são retirados no clone)
  var newEl = el.cloneNode(false);
  // Copia todos os filhos do elemento antigo para o novo
  while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
  // Substitui o elemento antigo pelo novo
  el.parentNode.replaceChild(newEl, el);
}
