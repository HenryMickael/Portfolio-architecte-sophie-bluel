const bearerToken = localStorage.getItem("1");
console.log(bearerToken);
fetch("http://localhost:5678/api/works", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + bearerToken,
  },
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(
        "Erreur lors de la récupération des informations de l'utilisateur."
      );
    }
  })
  .then((data) => {
    // Vérifiez si l'utilisateur a accès à la partie supplémentaire du site pour travailler sur les modales en utilisant les données retournées par l'API
    if (data.hasAccess) {
      //afficher la partie supplémentaire du site pour travailler sur les modales
    } else {
      //afficher un message d'erreur ou rediriger vers la page de connexion
    }
  })
  .catch((error) => {
    console.error(error);
  });
