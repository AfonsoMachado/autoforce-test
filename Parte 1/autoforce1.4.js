const whatsButton = document.getElementById("popup-whats");
const phoneList = document.querySelector(".list--header-phones");
whatsButton.setAttribute("onclick", "toggleWhatsPopUp()");

const whatsUrlsWrapper = document.createElement("ul");
whatsUrlsWrapper.className =
  "list list--header-phones list--border-bottom whats-list";

createList();
createWhatsWrapperStyles();

whatsButton.appendChild(whatsUrlsWrapper);

function toggleWhatsPopUp() {
  const whatsList = document.querySelector(".whats-list");
  whatsList.classList.toggle("show");
  whatsList.classList.contains("show")
    ? (whatsUrlsWrapper.style.display = "block")
    : (whatsUrlsWrapper.style.display = "none");
}

function createList() {
  const whatsUrls = [
    "<a href='https://wa.me/send?phone=5511999999999' target='_blank'><strong>Seminovos:</strong> +55 (11) 99999-9999</a>",
    "<a href='https://wa.me/send?phone=55111111111111' target='_blank'><strong>Serviços</strong> +55 (11) 11111-11111</a>",
    "<a href='https://wa.me/send?phone=5511888888888' target='_blank'><strong>Central de Vendas:</strong> +55 (11) 88888-8888</a>",
  ];
  for (const item of whatsUrls) {
    const li = document.createElement("li");
    li.classList = "header__card-whatsapp-item";
    li.innerHTML = `${item}`;
    li.firstChild.style.color = "#333333";
    whatsUrlsWrapper.append(li);
  }
}

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
