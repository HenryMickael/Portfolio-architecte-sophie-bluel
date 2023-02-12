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
//  fermeture modal si click exterieur
const modal = document.querySelector(".modal");
const modalGen1 = document.querySelector("#modal1");
const modalGen2 = document.querySelector("#modal2");
const modal1 = document.querySelector("#modal-box");
const modal2 = document.querySelector("#modal-box2");

modalGen1.addEventListener("click", function (event) {
  if (event.target !== modal1 && event.target.closest("#modal-box") === null) {
    modalGen1.style.display = "none";
  }
});
modalGen2.addEventListener("click", function (event) {
  if (event.target !== modal2 && event.target.closest("#modal-box2") === null) {
    modalGen2.style.display = "none";
  }
});
