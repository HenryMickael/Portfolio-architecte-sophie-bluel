// const generateProjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data);

//   let response = await data.json();
//   console.log(response);

//   for (let i = 0; i < response.length; i++) {
//     const article = response[i];
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("figure");
//     const imageElement = document.createElement("img");
//     imageElement.srcset = article.imageUrl;
//     // imageElement.setAttribute("alt", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// };

// generateProjet();
// *****************************************************************
// *****************************************************************
// *****************************************************************
// fetch("http://localhost:5678/api/works")
//   .then((data) => data.json())
//   .then(function (response) {
//     for (let i = 0; i < response.length; i++) {
//       const article = response[i];
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = article.imageUrl;
//       imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   });

// const boutonTrierTous = document.querySelector("#tous");

// boutonTrierTous.addEventListener("click", function () {
//   const boutonFiltrerTous = Array.from(fetch);
//   boutonFiltrerTous.sort(function (a, b) {
//     return boutonFiltrerTous;
//   });
//   console.log(boutonFiltrerTous);
// });

// const boutonTrierObjets = document.querySelector("#objets");

// boutonTrierObjets.addEventListener("click", function () {
//   const boutonFiltrerObjets = fetch.filter(function (fetch) {
//     return fetch.name === objets;
//   });
//   //     boutonFiltrerTous.filter(function (a, b) {
//   //   return boutonFiltrerObjets;
//   //     });
//   console.log(boutonFiltrerObjets);
// });
// test test
// fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then(function (data) {
//     for (let i = 0; i < data.length; i++) {
//       const article = data[i];
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = article.imageUrl;
//       imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   });

// const boutonTrierTous = document.querySelector("#tous");

// boutonTrierTous.addEventListener("click", function () {
//   const boutonFiltrerTous = data.slice();
//   boutonFiltrerTous.sort(function (a, b) {
//     return a.title.localeCompare(b.title);
//   });
//   console.log(boutonFiltrerTous);
// });

// const boutonTrierObjets = document.querySelector("#objets");

// boutonTrierObjets.addEventListener("click", function () {
//   const boutonFiltrerObjets = data.filter(function (article) {
//     return article.category === "objets";
//   });
//   console.log(boutonFiltrerObjets);
// });

// fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then(function (data) {
//     for (let i = 0; i < data.length; i++) {
//       const article = data[i];
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = article.imageUrl;
//       imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   });
// const boutonTrierTous = document.querySelector("#tous");
// boutonTrierTous.addEventListener("click", function () {
//   const boutonFiltrerTous = dataProjets;
//   console.log(boutonFiltrerTous);
//   return boutonFiltrerTous;
// });
// const boutonFiltrerObjet = document.querySelector("#objets");
// boutonFiltrerObjet.addEventListener("click", function () {
//   const objetsFiltrees = dataProjet.filter(function (name) {
//     return article.name === "Objets";
//   });
//   console.log(objetsFiltrees);
// });

// document.querySelector("#gallery").innerHTML = "";
// generateProjet(objetsFiltrees);
// ***************************************************************
// let fetchUrl = fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// console.log(fetchUrl);
// const generateProjet = () => {
//   for (let i = 0; i < fetchUrl.length; i++) {
//     const article = fetchUrl[i];
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("figure");
//     const imageElement = document.createElement("img");
//     imageElement.srcset = article.imageUrl;
//     imageElement.setAttribute("alt", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// };
// generateProjet(fetchUrl);

// *******************************************************************
// const generateProjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data);

//   let response = await data.json();
//   console.log(response);

//   for (let i = 0; i < response.length; i++) {
//     const article = response[i];
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("figure");
//     const imageElement = document.createElement("img");
//     imageElement.srcset = article.imageUrl;
//     // imageElement.setAttribute("alt", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// };
// generateProjet();

// const genererObjetFiltree=generateProjet() =>{

// const boutonFiltrerObjet = document.querySelector("#objets");
// boutonFiltrerObjet.addEventListener("click", function () {
//   const objetsFiltrees = article.filter(obj.(article) {
//     return article.name === "Objets";
//   });
//   console.log(objetsFiltrees);
//   // });

//   document.querySelector("#gallery").innerHTML = "";
//   generateProjet(objetsFiltrees);
// })
// }
// ********
// const reponse = fetch("http://localhost:5678/api/works");
// const pieces = await reponse.json();

// console.log(pieces);
// let data;
// fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then((json) => {
//     data = json;
//     const boutonFiltrerObjet = document.querySelector("#objets");
//     boutonFiltrerObjet.addEventListener("click", function () {
//       const objetsFiltrees.filter((objets) => {
//         return objets.categoryId === 1;
//       });
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = data.imageUrl;
//       // imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = data.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//       // });
//       console.log(objetsFiltrees);
//     });
//   });
// //   *************************************************************************
// // Efface le contenu de la balise body et donc l’écran
// document.querySelector("#gallery").innerHTML = '';
// // *******************************************************************************
// let data;
// fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then((json) => {
//     data = json;

//   })
// *************************************************************
// **************************************************************

// const generateProjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data);

//   let response = await data.json();
//   console.log(response);

//   for (let i = 0; i < response.length; i++) {
//     const article = response[i];
//     // test bouton
//     // test
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("figure");
//     const imageElement = document.createElement("img");
//     imageElement.srcset = article.imageUrl;
//     // imageElement.setAttribute("alt", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// };

// generateProjet();

// const boutonFiltrer = document.querySelector(".btn-filtrer");

// const boutonFiltrerObjet = document.querySelector("#objets");
// boutonFiltrerObjet.addEventListener("click", function () {
//     const objetsFiltrees= response.filter(article.) => article.categoryId == 1;
// });
// // });
// console.log(objetsFiltrees);
// *******************************************************************************
// let apiData;

// fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then((data) => {
//     apiData = data;
//     console.log(apiData);

//     for (let i = 0; i < apiData.length; i++) {
//       const article = apiData[i];
//       // test bouton
//       // test
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = article.imageUrl;
//       // imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => console.error(error));
// console.log(apiData);
// **************************************************************************
// ***************************************************************************

// async function generateProject() {
//   let apiData = await fetch("http://localhost:5678/api/works").then(
//     (response) => response.json()
//   );
//   console.log(apiData);

//   for (let i = 0; i < apiData.length; i++) {
//     const article = apiData[i];
//     // test bouton
//     // test
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("figure");
//     const imageElement = document.createElement("img");
//     imageElement.srcset = article.imageUrl;
//     // imageElement.setAttribute("alt", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// }
// generateProject();

// // BOUTONS*****************************************************************

// const generateBoutons = async () => {
//   let apiData = await fetch("http://localhost:5678/api/works");
//   console.log(apiData);

//   let response = await apiData.json();
//   console.log(response);
//   document.getElementById("objets").addEventListener("click", function () {
//     let filteredData = response.filter((item) => item.categoryId === 1);

//     for (let i = 0; i < filteredData.length; i++) {
//       const article = filteredData[i];
//       // test bouton
//       // test
//       const sectionGallery = document.querySelector("#gallery");
//       const projetElement = document.createElement("figure");
//       const imageElement = document.createElement("img");
//       imageElement.srcset = article.imageUrl;
//       // imageElement.setAttribute("alt", article.title);
//       const titleElement = document.createElement("p");
//       titleElement.innerText = article.title;

//       sectionGallery.appendChild(projetElement);
//       projetElement.appendChild(imageElement);
//       projetElement.appendChild(titleElement);
//     }
//   });
// };
// document.querySelector("#gallery").innerHTML = "";

// generateBoutons();

// Test again****************************************************************
// *************************************************************************
const generateProjects = async () => {
  let apiData = await fetch("http://localhost:5678/api/works").then(
    (response) => response.json()
  );

  for (let i = 0; i < apiData.length; i++) {
    const article = apiData[i];
    const sectionGallery = document.querySelector("#gallery");
    const projectElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.srcset = article.imageUrl;
    const titleElement = document.createElement("p");
    titleElement.innerText = article.title;

    sectionGallery.appendChild(projectElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
  }
};

const generateFilteredProjects = async (filter) => {
  let apiData = await fetch("http://localhost:5678/api/works").then(
    (response) => response.json()
  );

  const filteredData = apiData.filter((item) => item.categoryId === filter);

  const sectionGallery = document.querySelector("#gallery");
  sectionGallery.innerHTML = "";

  for (let i = 0; i < filteredData.length; i++) {
    const article = filteredData[i];
    const projectElement = document.createElement("figure");
    const imageElement = document.createElement("img");
    imageElement.srcset = article.imageUrl;
    const titleElement = document.createElement("p");
    titleElement.innerText = article.title;

    sectionGallery.appendChild(projectElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
  }
};

generateProjects();

document.getElementById("tous").addEventListener("click", function () {
  generateProjects();
});
document.getElementById("objets").addEventListener("click", function () {
  generateFilteredProjects(1);
});
document.getElementById("appartements").addEventListener("click", function () {
  generateFilteredProjects(2);
});
document
  .getElementById("hotels-restaurant")
  .addEventListener("click", function () {
    generateFilteredProjects(3);
  });

// AUTRE VERSION ****************************************************************
// ******************************************************************************
