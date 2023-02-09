// Ouverture modale1
document
  .getElementById("modif-portfolio")
  .addEventListener("click", function () {
    document.getElementById("modal1").style.display = "flex";
  });
//   femeture modale
document
  .getElementById("croixFermeture")
  .addEventListener("click", function () {
    document.getElementById("modal1").style.display = "none";
  });

//   Modal1 ajouter photo
document.getElementById("btnAddPic").addEventListener("click", function () {
  document.getElementById("modal1").style.display = "none";
  document.getElementById("modal2").style.display = "flex";
});

// Retour modale1
document.getElementById("retour2").addEventListener("click", function () {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("modal1").style.display = "flex";
});
//   femeture modale2
document
  .getElementById("croixFermeture2")
  .addEventListener("click", function () {
    document.getElementById("modal2").style.display = "none";
  });
// bouton ajouter photo
document.getElementById("btnAjoutPhoto").addEventListener("click", function () {
  document.getElementById("photo-input").click();
});

// // Bouton de suppression
// deleteIcon.addEventListener("click", () => {
//   const imageId = image.getAttribute("data-id");
//   if (!imageId) return;

//   fetch(`http://localhost:5678/api/works/${imageId}`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer`+ bearerToken,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) throw new Error("Failed to delete image");
//       imagesContainer.removeChild(image);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });
