/**
 * 4. Crie um botão flutuante de WhatsApp
 *
 * Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela,
 * ao clicar nesse botão três números devem aparecer:
 * (Seminovos: +55 (11) 99999-9999, Serviços +55 (11) 11111-11111 e Central de Vendas: +55 (11) 88888-8888),
 * um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp.
 *
 */

// Seleciona o ícone de WhatsApp já existente no canto inferior esquerdo
const whatsButton = document.getElementById("popup-whats");
// Seleciona o modelo da lista de telefone existente no header para aproveitar suas classes
const phoneList = document.querySelector(".list--header-phones");
// Adiciona o atributo onclick ao botão do WhatsApp para chamar a função toggleWhatsPopUp()
whatsButton.setAttribute("onclick", "toggleWhatsPopUp()");

// Cria o elemento ul que irá conter a lista de telefones
const whatsUrlsWrapper = document.createElement("ul");
// Adiciona classes ao elemento ul
whatsUrlsWrapper.className =
  "list list--header-phones list--border-bottom whats-list";

// Cria a lista do telefones e insere dentro do elemento ul
createList();
// Cria os estilos do elemento ul
createWhatsWrapperStyles();
// Insere o elemento ul na tela (inicialmente oculto)
whatsButton.appendChild(whatsUrlsWrapper);

/**
 * Mostra ou oculta a lista de telefones
 */
function toggleWhatsPopUp() {
  const whatsList = document.querySelector(".whats-list");
  whatsList.classList.toggle("show");
  whatsList.classList.contains("show")
    ? (whatsUrlsWrapper.style.display = "block")
    : (whatsUrlsWrapper.style.display = "none");
}

/**
 * Função que cria a lista de telefones já estilizada
 */
function createList() {
  // URLs a serem usadas com seus devidos estilos
  const whatsUrls = [
    "<a href='https://wa.me/send?phone=5511999999999' target='_blank'><strong>Seminovos:</strong> +55 (11) 99999-9999</a>",
    "<a href='https://wa.me/send?phone=55111111111111' target='_blank'><strong>Serviços</strong> +55 (11) 11111-11111</a>",
    "<a href='https://wa.me/send?phone=5511888888888' target='_blank'><strong>Central de Vendas:</strong> +55 (11) 88888-8888</a>",
  ];
  // Cria um novo elemento li para cada URL, adicionando estilos, classes e inserindo no elemento ul
  for (const item of whatsUrls) {
    const li = document.createElement("li");
    li.classList = "header__card-whatsapp-item";
    li.innerHTML = `${item}`;
    li.firstChild.style.color = "#333333";
    whatsUrlsWrapper.append(li);
  }
}

/**
 * Função para criar os estilos do elemento ul, inserindo o mesmo na tela
 * com posição relativa ao botão do WhatsApp
 */
function createWhatsWrapperStyles() {
  whatsUrlsWrapper.style.display = "none";
  whatsUrlsWrapper.style.backgroundColor = "#f8f9f9";
  whatsUrlsWrapper.style.position = "relative";
  whatsUrlsWrapper.style.top = "-10rem";
  whatsUrlsWrapper.style.width = "320px";
  whatsUrlsWrapper.style.cursor = "auto";
  whatsUrlsWrapper.style.borderRadius = "5px";
  whatsUrlsWrapper.style.border = "1px solid #ebeded";
}
