// let globalData;
function fetchData() {
  return fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
    });
}
// Gallery dynamique
function genererGallery() {
  fetchData().then(() => {
    console.log(globalData);
    for (let i = 0; i < globalData.length; i++) {
      const article = globalData[i];
      const sectionGallery = document.querySelector("#gallery");
      const projetElement = document.createElement("figure");
      const imageElement = document.createElement("img");
      imageElement.srcset = article.imageUrl;
      imageElement.setAttribute("alt", article.title);
      const titleElement = document.createElement("p");
      titleElement.innerText = article.title;

      sectionGallery.appendChild(projetElement);
      projetElement.appendChild(imageElement);
      projetElement.appendChild(titleElement);
    }
  });
}
genererGallery();
// // Filtre
// Objet
let Filtre = async () => {
  const boutonFiltrerObjet = document.querySelector("#objets");

  boutonFiltrerObjet.addEventListener("click", function () {
    const projetFiltrees = globalData.filter(function (globalData) {
      return globalData.categoryId === 1;
    });
    console.log(projetFiltrees);
    document.querySelector("#gallery").innerHTML = "";
    // genererGallery(projetFiltrees);
  });
  genererGallery(boutonFiltrerObjet);
  // appartement
  const boutonFiltrerAppartements = document.querySelector("#appartements");

  boutonFiltrerAppartements.addEventListener("click", function () {
    const projetFiltrees = globalData.filter(function (globalData) {
      return globalData.categoryId === 2;
    });
    console.log(projetFiltrees);
    document.querySelector("#gallery").innerHTML = "";
  });
  genererGallery(boutonFiltrerAppartements);
  // Hotel et restaurant
  const boutonFiltrerHotel = document.querySelector("#hotels-restaurant");

  boutonFiltrerHotel.addEventListener("click", function () {
    const projetFiltrees = globalData.filter(function (globalData) {
      return globalData.categoryId === 3;
    });
    console.log(projetFiltrees);
    document.querySelector("#gallery").innerHTML = "";
  });
  genererGallery(boutonFiltrerHotel);
  // Tous
  const boutonFiltrerTous = document.querySelector("#tous");

  boutonFiltrerTous.addEventListener("click", function () {
    const projetFiltrees = globalData.filter(function (globalData) {
      return globalData.categoryId === 1, 2, 3;
    });
    console.log(projetFiltrees);
    document.querySelector("#gallery").innerHTML = "";
  });
  genererGallery(boutonFiltrerTous);
};
Filtre();
