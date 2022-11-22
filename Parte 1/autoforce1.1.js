const nav = document.querySelector(".nav");
const lastLink = nav.lastChild.firstChild;
const newLink = lastLink.cloneNode(true);

const newList = [nav.childNodes[1], nav.childNodes[2]];

newList.forEach((e) => {
  e.className = "";
  e.firstChild.className = "";
  e.firstChild.classList.add("card-collapse-deep__title");
});

const veiculos = document.createElement("li");
const dropdownDiv = document.createElement("div");
const ul = document.createElement("ul");

newLink.firstChild.nodeValue = "Veículos";
veiculos.appendChild(newLink);
veiculos.classList.add("nav-item", "nav-simple__item");
nav.insertBefore(veiculos, nav.childNodes[1]);

ul.classList.add("list", "list--border-bottom");
ul.appendChild(newList[0]);
ul.appendChild(newList[1]);

dropdownDiv.appendChild(ul);
dropdownDiv.classList.add(
  "nav-simple-sub",
  "card-collapse-deep",
  "dropdown-menu"
);
veiculos.appendChild(dropdownDiv);

newLink.addEventListener("click", () => {
  veiculos.classList.toggle("show");
  dropdownDiv.classList.toggle("show");
});

// --------------------------------------------------------------------
// Reorganizando elementos

let newNav = [1, 5, 3, 2, 4, 6].map((value) => {
  return nav.children[value];
});
newNav.unshift(nav.children[0]);

nav.innerHTML = "";
newNav.forEach((e) => {
  nav.append(e);
});
