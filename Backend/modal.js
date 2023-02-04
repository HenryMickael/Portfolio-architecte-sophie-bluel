// Bandeau Mode edition fonctionel
const body = document.querySelector("#bandeau-publication");
const bandeau = document.createElement("div");
bandeau.setAttribute("id", "bandeau");
const icone = document.createElement("a");
icone.setAttribute("id", "modif-gen");
const iconeFa = document.createElement("i");
iconeFa.setAttribute("class", "fa-regular fa-pen-to-square");

const modif = document.createElement("h3");
modif.innerText = "Mode édition";
const btnPubli = document.createElement("button");
btnPubli.setAttribute("id", "publier");
btnPubli.innerText = "publier les changements";

body.appendChild(bandeau);
bandeau.appendChild(icone);
icone.appendChild(iconeFa);
bandeau.appendChild(modif);
bandeau.appendChild(btnPubli);
