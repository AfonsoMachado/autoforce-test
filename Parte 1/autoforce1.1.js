/**
 * 1. Modifique os itens de menu "Novos" e "Seminovos" e reordene os itens do menu
 * Site: https://testes.autoforce.com.br/autoforce-ford
 *
 * Crie um novo item dropdown para o menu e o intitule "Veículos".
 * Os itens "Novos" e "Seminovos" devem ser realocados para esse novo dropdown.
 * O item "Veículos" deve ser o primeiro do menu.
 * Após este primeiro passo, reordene a disposição do menu para a seguinte ordem:
 * Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato
 */

// -------------------------- CRIANDO MENU DROPDOWN VEÍCULOS ----------------------------------

// Seleciona toda a barra de navegação
const nav = document.querySelector(".nav");
// Selecione última opção da barra de navegação
const lastLink = nav.lastChild.firstChild;
// Cria uma cópia da última opção para basear na construção do dropdown
const newLink = lastLink.cloneNode(true);

// Cria uma nova lista com as opções Novos e Seminovos
const newList = [nav.childNodes[1], nav.childNodes[2]];

// Adiciona classes pertinentes à lista para suporte ao dropdown
newList.forEach((e) => {
  e.className = "";
  e.firstChild.className = "";
  e.firstChild.classList.add("card-collapse-deep__title");
});

// Cria o elemento Veículos que ativa o dropdown
const veiculos = document.createElement("li");
// Cria o dropdown
const dropdownDiv = document.createElement("div");
// Cria a lista que ficará dentro do dropdown
const ul = document.createElement("ul");

// Adiciona o título 'Veículos ao link clonado anteriomente'
newLink.firstChild.nodeValue = "Veículos";
// Adiciona o link dentro do elemento veículos
veiculos.appendChild(newLink);
// Adiciona classes ao elemento veículos
veiculos.classList.add("nav-item", "nav-simple__item");
// Insere o elemento veículos na barra de navegação logo depois do primeiro elemento
nav.insertBefore(veiculos, nav.childNodes[1]);

// Adiciona os menos de novos e seminovos na lista de itens
ul.classList.add("list", "list--border-bottom");
ul.appendChild(newList[0]);
ul.appendChild(newList[1]);

// Adiciona a lista de itens dentro do dropdown
dropdownDiv.appendChild(ul);
dropdownDiv.classList.add(
  "nav-simple-sub",
  "card-collapse-deep",
  "dropdown-menu"
);
// Adiciona o dropdown dentro do menu de veículos
veiculos.appendChild(dropdownDiv);

// Adiciona o evento para exibir e ocultar o dropdown a cada clique
newLink.addEventListener("click", () => {
  veiculos.classList.toggle("show");
  dropdownDiv.classList.toggle("show");
});

// -------------------------- REORGANIZANDO ELEMENTOS ----------------------------------

// A partir de um array contendo a ordem dos elementos, é criada uma nova barra de navegação
// organizando os elementos conforme a ordem indicada no array
let newNav = [1, 5, 3, 2, 4, 6].map((value) => {
  return nav.children[value];
});
// Adiciona o elemento 0, ícone 'home', ao início da nova barra de navegação
newNav.unshift(nav.children[0]);

// Apaga completamente os filhos da antiga barra de navegação
nav.innerHTML = "";
// Insere os filhos da barra de navegação conforme a ordem especificada
newNav.forEach((e) => {
  nav.append(e);
});
