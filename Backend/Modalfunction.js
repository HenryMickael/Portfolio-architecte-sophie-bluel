// Ouverture modale1
document
  .getElementById("modif-portfolio")
  .addEventListener("click", function () {
    document.getElementById("modal1").style.display = "flex";
  });
//   femeture modale1
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
//   femeture modale1
document
  .getElementById("croixFermeture2")
  .addEventListener("click", function () {
    document.getElementById("modal2").style.display = "none";
  });
