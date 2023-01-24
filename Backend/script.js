// const { crossOriginEmbedderPolicy } = require("helmet");

const generateProjet = async () => {
  let data = await fetch("http://localhost:5678/api/works");
  console.log(data);

  let response = await data.json();
  console.log(response);

  for (let i = 0; i < response.length; i++) {
    const article = response[i];
    const sectionGallery = document.querySelector("#gallery");
    const projetElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.srcset = article.imageUrl;
    // imageElement.setAttribute("alt", article.title);
    const titleElement = document.createElement("p");
    titleElement.innerText = article.title;

    sectionGallery.appendChild(projetElement);
    projetElement.appendChild(imageElement);
    projetElement.appendChild(titleElement);
  }
};

generateProjet();

/******************************************************************** */

// fetch("http://localhost:5678/api/works")
//   .then((reponse) => {
//     return reponse.json();
//   })
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       const article = data[i];
//       const sectionGallery = document.querySelector(".gallery");
//       const projetElement = document.createElement("article");
//       const imageElement = document.createElement(
//         `img crossorigin="anonymous" src="article.imageUrl"`
//       );
//       //   imageElement.src = article.imageUrl;
//       imageElement.setAttribute("alt", article.title);
//       imageElement.setAttribute("title", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => console.log("Erreur"));

// //   ***********************************************************************************

// fetch("http://localhost:5678/api/works")
//   .then((reponse) => {
//     return reponse.json();
//   })
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       const article = data[i];
//       const sectionGallery = document.querySelector(".gallery");
//       const projetElement = document.createElement("article");
//       const imageElement = document.createElement(
//         `img crossorigin="anonymous"`
//       );
//       imageElement.src = article.works.imageUrl;
//       imageElement.setAttribute("alt", article.title);
//       imageElement.setAttribute("title", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => console.log("Erreur"));

// //   *******************************************************************************************************
// http://localhost:5678/images/abajour-tahina1651286843956.png
// fetch(`http://localhost:5678/api/works`)
//   .then((reponse) => {
//     return reponse.json();
//   })
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       const article = data[i];
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.src = article.imageUrl;
//       //   imageElement.setAttribute("alt", article.title);
//       //   imageElement.setAttribute("title", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;
//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => console.log("Erreur"));

// **********************************************************************
// test filtre
// const boutonFiltrerObjet = document.querySelector("#objets");
// boutonFiltrerObjet.addEventListener("click", function () {
//   const objetsFiltrees = article.filter(function (article) {
//     return article.name === "Objets";
//   });
//   console.log(objetsFiltrees);
// });

// document.querySelector("#gallery").innerHTML = "";
// generateProjet(objetsFiltrees);
