// const { default: helmet, crossOriginEmbedderPolicy } = require("helmet");

// const generateProjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data);

//   let response = await data.json();
//   console.log(response);

//   const sectionGallery = document.querySelector(".gallery");
//   const projetElement = document.createElement("figure");
//   const imageElement = document.createElement("img");
//   imageElement.innerHTML =
//     "http://localhost:5678/images/abajour-tahina1651286843956.png";
//   //   response[1].imageUrl;
//   //   imageElement.setAttribute("alt", response[1].title);
//   //   imageElement.setAttribute("title", response[1].title);
//   const titleElement = document.createElement("p");
//   titleElement.innerText = response[1].title;

//   sectionGallery.appendChild(projetElement);
//   projetElement.appendChild(imageElement);
//   projetElement.appendChild(titleElement);
// };

// generateProjet();
// **************************************************************

// ("http://localhost:5678/images/abajour-tahina1651286843956.png");
// // ***********************************************************
// // FILTER OBJET

// const generateFilterObjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data);

//   let response = await data.json();
//   console.log(response);
// };
// generateFilterObjet();

// *********************************************************************
// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById("gallery");
// const url = "http://localhost:5678/api/works";

// fetch(url)
//   .then((resp) => resp.json())
//   .then(function (data) {
//     let authors = data;
//     return authors.map(function (author) {
//       let li = createNode("figure");
//       let img = createNode("img");
//       let span = createNode("span");
//       img.src = author.imageUrl;
//       span.innerHTML = author.title;
//       append(li, img);
//       append(li, span);
//       append(ul, li);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// *************************************************************************
// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }
// const gallery = document.getElementsByClassName("gallery");
// const url = "http://localhost:5678/api/works";

// fetch(url)
//   .then((resp) => resp.json())
//   .then(function (data) {
//     let tableau = data;
//     // console.log(projet);
//     return tableau.map(function (projet) {
//       let figure = createNode("figure");
//       let img = createNode("img");
//       let p = createNode("p");
//       img.src = projet.imageUrl;
//       p.innerHTML = projet.title;
//       append(figure, img);
//       append(figure, p);
//       append(gallery, figure);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
