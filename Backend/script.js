// const generateProjet = async () => {
//   let data = await fetch("http://localhost:5678/api/works");
//   console.log(data)

//   let response = await data.json();
//   console.log(response);

//   for (let i = 0; i < response.length; i++) {
//     const article = response[i];
//     const sectionGallery = document.querySelector("#gallery");
//     const projetElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     imageElement.src = document.imageUrl;
//     imageElement.setAttribute("alt", article.title);
//     imageElement.setAttribute("title", article.title);
//     const titleElement = document.createElement("p");
//     titleElement.innerText = article.title;

//     sectionGallery.appendChild(projetElement);
//     projetElement.appendChild(imageElement);
//     projetElement.appendChild(titleElement);
//   }
// };

// generateProjet();

/******************************************************************** */

fetch("http://localhost:5678/api/works")
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const article = data[i];
      const sectionGallery = document.querySelector(".gallery");
      const projetElement = document.createElement("article");
      const imageElement = document.createElement("img");
      imageElement.src = article.imageUrl;
      imageElement.setAttribute("alt", article.title);
      imageElement.setAttribute("title", article.title);
      const titleElement = document.createElement("p");
      titleElement.innerText = article.title;

      sectionGallery.appendChild(projetElement);
      projetElement.appendChild(imageElement);
      projetElement.appendChild(titleElement);
    }
  });
