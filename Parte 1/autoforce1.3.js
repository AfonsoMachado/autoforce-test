const whatsButtons = document.querySelectorAll(".button--whatsapp");
const whatsUrl = "https://wa.me/send?phone=5583988971010";

for (const whatsButton of whatsButtons) {
  recreateNode(whatsButton);
  whatsButton.setAttribute("onclick", `window.open("${whatsUrl}", "_blank")`);
}

/** Função para remover todos os eventos de um Node */
function recreateNode(el) {
  var newEl = el.cloneNode(false);
  while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
  el.parentNode.replaceChild(newEl, el);
}
