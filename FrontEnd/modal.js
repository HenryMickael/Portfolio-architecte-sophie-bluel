const bearerToken = localStorage.getItem("bearerToken");
console.log(bearerToken);

if (bearerToken) {
  // Bandeau Mode edition fonctionel*******************************************************************
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

  // Bouton modifié***************************************************************************
  // photo**********************************
  const figure = document.querySelector("figure");
  const btnModifPhoto = document.createElement("a");
  btnModifPhoto.setAttribute("href", "#");
  btnModifPhoto.setAttribute("id", "modif-photo");
  const iconeModifie = document.createElement("i");
  iconeModifie.setAttribute("class", "fa-regular fa-pen-to-square");
  iconeModifie.innerText = "Modifier";

  figure.appendChild(btnModifPhoto);
  btnModifPhoto.appendChild(iconeModifie);

  // Description************************************************************************************
  const btnArticle = document.querySelector("#btnArticle");
  const btnModifDescription = document.createElement("a");
  btnModifDescription.setAttribute("href", "#");
  btnModifDescription.setAttribute("id", "modif-presentation");
  const iconeModifie2 = document.createElement("i");
  iconeModifie2.setAttribute("class", "fa-regular fa-pen-to-square");
  iconeModifie2.innerText = "Modifier";

  btnArticle.appendChild(btnModifDescription);
  btnModifDescription.appendChild(iconeModifie2);

  // Projet**************************************
  const projet = document.querySelector("#projet");
  const btnModifProjet = document.createElement("a");
  btnModifProjet.setAttribute("href", "#");
  btnModifProjet.setAttribute("id", "modif-portfolio");
  const iconeModifie3 = document.createElement("i");
  iconeModifie3.setAttribute("class", "fa-regular fa-pen-to-square");
  iconeModifie3.innerText = "Modifier";

  projet.appendChild(btnModifProjet);
  btnModifProjet.appendChild(iconeModifie3);

  // MODALE****************************************************************************************************
  // Page MODALE1 VIERGE********************************************************************************************
  const firstModal = document.querySelector("body");
  const aside1 = document.createElement("aside");
  aside1.setAttribute("id", "modal1");
  aside1.setAttribute("class", "modal");
  aside1.setAttribute("style", "display: none");
  const modalBox = document.createElement("div");
  modalBox.setAttribute("id", "modal-box");

  firstModal.appendChild(aside1);
  aside1.appendChild(modalBox);

  // Page MODALE2 VIERGE********************************************************************************************
  const secondModal = document.querySelector("body");
  const aside2 = document.createElement("aside");
  aside2.setAttribute("id", "modal2");
  aside2.setAttribute("class", "modal");
  aside2.setAttribute("style", "display: none");
  const modalBox2 = document.createElement("div");
  modalBox2.setAttribute("id", "modal-box2");

  secondModal.appendChild(aside2);
  aside2.appendChild(modalBox2);

  // Page MOADALE 1 GALERIE PHOTO*************************************************************************
  const modalBox1 = document.querySelector("#modal-box");
  const fermeture1 = document.createElement("a");
  fermeture1.setAttribute("href", "#");
  fermeture1.setAttribute("id", "croixFermeture");
  const iconeFermeture1 = document.createElement("i");
  iconeFermeture1.setAttribute("class", "fa-solid fa-x");
  const titre1 = document.createElement("h2");
  titre1.innerText = "Galerie photo";
  const portfolioAll = document.createElement("div");
  portfolioAll.setAttribute("id", "portfolioModal");

  const ligne1 = document.createElement("div");
  ligne1.setAttribute("id", "ligne1");
  const btnAddPic = document.createElement("button");
  btnAddPic.setAttribute("id", "btnAddPic");
  btnAddPic.innerText = "Ajouter une photo";
  const supprGalerie = document.createElement("a");
  supprGalerie.setAttribute("href", "#");
  supprGalerie.setAttribute("id", "Suppr-Galerie");
  supprGalerie.innerText = "Supprimer la galerie";

  modalBox1.appendChild(fermeture1);
  fermeture1.appendChild(iconeFermeture1);
  modalBox1.appendChild(titre1);
  modalBox1.appendChild(portfolioAll);
  modalBox1.appendChild(ligne1);
  modalBox1.appendChild(btnAddPic);
  modalBox1.appendChild(supprGalerie);

  // Page MOADALE 2 AJOUT PHOTO***************************************************************
  // Retour et croix*******************************************************
  const modalBox22 = document.querySelector("#modal-box2");
  const retFerm = document.createElement("div");
  retFerm.setAttribute("id", "retFerm");
  const fermeture2 = document.createElement("a");
  fermeture2.setAttribute("href", "#");
  fermeture2.setAttribute("id", "croixFermeture2");
  const iconeFermeture2 = document.createElement("i");
  iconeFermeture2.setAttribute("class", "fa-solid fa-x");
  const retour2 = document.createElement("a");
  retour2.setAttribute("href", "#");
  retour2.setAttribute("id", "retour2");
  const iconeRetour2 = document.createElement("i");
  iconeRetour2.setAttribute("class", "fa-sharp fa-solid fa-left-long");

  // form image**********************************************************
  const titre2 = document.createElement("h2");
  titre2.innerText = "Ajout photo";
  const addPic = document.createElement("div");
  addPic.setAttribute("id", "addPic");
  const iconePic = document.createElement("i");
  iconePic.setAttribute("class", "fa fa-thin fa-image");
  const formImg = document.createElement("form");
  formImg.setAttribute("enctype", "multipart/form-data");
  formImg.setAttribute("method", "post");
  const inputImg = document.createElement("input");
  inputImg.setAttribute("name", "+ Ajouter vos photos");
  inputImg.setAttribute("type", "file");
  inputImg.setAttribute("id", "photo-input");
  inputImg.setAttribute("accept", "image/jpeg, image/jpg, image/png");
  const btnAjoutPhoto = document.createElement("button");
  btnAjoutPhoto.setAttribute("id", "btnAjoutPhoto");
  btnAjoutPhoto.innerText = "+ Ajouter photo";
  const infoPic = document.createElement("p");
  infoPic.innerText = "jpg, png : 4mo max";

  // form titre********************************************************
  const formTitre = document.createElement("form");
  formTitre.setAttribute("action", "#");
  formTitre.setAttribute("method", "post");
  const labelTitre = document.createElement("label");
  labelTitre.setAttribute("for", "name");
  labelTitre.innerText = "Titre";
  const inputTitre = document.createElement("input");
  inputTitre.setAttribute("type", "text");
  inputTitre.setAttribute("name", "Titre");
  inputTitre.setAttribute("id", "Titre");

  // Categorie*******************************************************
  const formCategorie = document.createElement("form");
  formCategorie.setAttribute("action", "#");
  formCategorie.setAttribute("method", "post");
  const labelCategorie = document.createElement("label");
  labelCategorie.setAttribute("for", "categorie");
  labelCategorie.innerText = "Catégorie";

  const selectCategorie = document.createElement("select");
  selectCategorie.setAttribute("name", "categorie");
  selectCategorie.setAttribute("id", "categorie");
  // option vide*********************************************************
  const optionVide = document.createElement("option");
  optionVide.innerText = "";
  optionVide.setAttribute("selected", "selected");
  optionVide.setAttribute("hidden", "hidden");
  optionVide.setAttribute("disabled", "disabled");
  selectCategorie.appendChild(optionVide);

  const optionObjet = document.createElement("option");
  optionObjet.innerText = "Objets";
  optionObjet.setAttribute("value", "1");

  const optionAppartements = document.createElement("option");
  optionAppartements.innerText = "Appartements";
  optionAppartements.setAttribute("value", "2");

  const optionHotels = document.createElement("option");
  optionHotels.innerText = "Hotels & restaurants";
  optionHotels.setAttribute("value", "3");

  // Ligne + bouton valider**********************************************
  const ligne2 = document.createElement("div");
  ligne2.setAttribute("id", "ligne2");
  const btnValide = document.createElement("button");
  btnValide.setAttribute("id", "btnValider");
  btnValide.innerText = "Valider";
  btnValide.style.display = "none";

  const btnValideGray = document.createElement("button");
  btnValideGray.setAttribute("id", "btnValiderGray");
  btnValideGray.innerText = "Valider";

  modalBox22.appendChild(retFerm);
  retFerm.appendChild(retour2);
  retFerm.appendChild(fermeture2);
  fermeture2.appendChild(iconeFermeture2);
  retour2.appendChild(iconeRetour2);
  modalBox22.appendChild(titre2);
  modalBox22.appendChild(addPic);

  addPic.appendChild(iconePic);
  addPic.appendChild(formImg);
  formImg.appendChild(inputImg);

  addPic.appendChild(btnAjoutPhoto);
  addPic.appendChild(infoPic);

  modalBox22.appendChild(formTitre);
  formTitre.appendChild(labelTitre);
  formTitre.appendChild(inputTitre);

  modalBox22.appendChild(formCategorie);
  formCategorie.appendChild(labelCategorie);

  formCategorie.appendChild(selectCategorie);
  selectCategorie.appendChild(optionObjet);
  selectCategorie.appendChild(optionAppartements);
  selectCategorie.appendChild(optionHotels);

  modalBox22.appendChild(ligne2);
  modalBox22.appendChild(btnValide);
  modalBox22.appendChild(btnValideGray);
  //preview img chargé************************************************
  inputImg.addEventListener("change", function () {
    const preview = document.createElement("img");
    preview.setAttribute("id", "preview");
    preview.style.height = "100%";
    preview.style.objectFit = "cover";
    const file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      preview.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file);
    addPic.innerHTML = "";
    addPic.appendChild(preview);
  });

  //gallery image fetch complete*************************************************************************
  function fetchData() {
    return fetch("http://localhost:5678/api/works")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erreurlors de la suppression de l' ID ${id}: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        globalData = data;
      });
  }
  // Supression projet********************************************************
  function deleteWork(id) {
    console.log("bearerToken: ", bearerToken);
    return fetch(`http://localhost:5678/api/works/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ` + bearerToken,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Votre projet a été supprimé avec succès !");
        }
      })
      .catch((error) => console.log(error));
  }

  function genererGallery() {
    fetchData().then(() => {
      console.log(globalData);
      for (let i = 0; i < globalData.length; i++) {
        const article = globalData[i];
        const sectionGallery = document.querySelector("#portfolioModal");
        const projetElement = document.createElement("figure");
        const imageElement = document.createElement("img");
        imageElement.setAttribute("id", "imgModal2");
        imageElement.srcset = article.imageUrl;
        imageElement.setAttribute("alt", article.title);
        const edite1 = document.createElement("a");
        edite1.setAttribute("href", "#");
        edite1.setAttribute("id", "edite1");
        edite1.innerText = "éditer";
        // icone agrandissement******************************************
        const agrandissement = document.createElement("a");
        agrandissement.setAttribute("href", "#");
        agrandissement.setAttribute("id", "agrandissement");
        const iconeAgrandissement = document.createElement("i");
        iconeAgrandissement.setAttribute("class", "fa fa-duotone fa-maximize");
        //  poubelle + suppression*******************************************
        const poubelle = document.createElement("a");
        poubelle.setAttribute("href", "#");
        poubelle.setAttribute("id", "poubelle");
        poubelle.setAttribute("workId", article.id);
        const iconePoubelle = document.createElement("i");
        iconePoubelle.setAttribute("class", "fa-solid fa-trash-can");

        sectionGallery.appendChild(projetElement);
        projetElement.appendChild(imageElement);
        projetElement.appendChild(agrandissement);
        agrandissement.appendChild(iconeAgrandissement);
        projetElement.appendChild(poubelle);
        poubelle.appendChild(iconePoubelle);
        projetElement.appendChild(edite1);

        poubelle.addEventListener("click", (event) => {
          event.preventDefault();
          const workId = event.currentTarget.getAttribute("workId");
          deleteWork(workId).then(() => {});
        });
      }
    });
  }

  genererGallery();
  // **********************************************************************
  // Login => en logout*************************************************
  const loginButton = document.getElementById("login-button");
  const logoutButton = document.getElementById("logout-button");

  if (localStorage.getItem("bearerToken")) {
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
    logoutButton.innerText = "Logout";
  } else {
    loginButton.style.display = "inline-block";
    logoutButton.style.display = "none";
  }

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("userId");
    window.location.href = "/FrontEnd/";
  });

  //   affiche btnValide*****************************************
  //   **********************************************************
  selectCategorie.addEventListener("input", function () {
    if (
      inputImg.value &&
      inputTitre.value &&
      (selectCategorie.value === "1" ||
        selectCategorie.value === "2" ||
        selectCategorie.value === "3")
    ) {
      btnValide.style.display = "flex";
      btnValideGray.style.display = "none";
    } else {
      btnValide.style.display = "none";
      btnValideGray.style.display = "flex";
    }
  });

  inputImg.addEventListener("input", function () {
    if (
      inputImg.value &&
      inputTitre.value &&
      (selectCategorie.value === "1" ||
        selectCategorie.value === "2" ||
        selectCategorie.value === "3")
    ) {
      btnValide.style.display = "flex";
      btnValideGray.style.display = "none";
    } else {
      btnValide.style.display = "none";
      btnValideGray.style.display = "flex";
    }
  });

  inputTitre.addEventListener("input", function () {
    if (
      inputImg.value &&
      inputTitre.value &&
      (selectCategorie.value === "1" ||
        selectCategorie.value === "2" ||
        selectCategorie.value === "3")
    ) {
      btnValide.style.display = "flex";
      btnValideGray.style.display = "none";
    } else {
      btnValide.style.display = "none";
      btnValideGray.style.display = "flex";
    }
  });
  //erreur pas tout les champ rempli***************************************
  btnValiderGray.addEventListener("click", function () {
    if (
      !inputImg.value ||
      !inputTitre.value ||
      (selectCategorie.value !== "1" &&
        selectCategorie.value !== "2" &&
        selectCategorie.value !== "3")
    ) {
      const ChampVide = document.createElement("p");
      ChampVide.setAttribute("id", "champVide");
      ChampVide.innerText = "Veuillez remplir tous les champs";
      modalBox22.appendChild(ChampVide);
    }
  });
  // envoi works********************************************************
  const validateModal2Button = document.getElementById("btnValider");
  const textInput1 = document.getElementById("Titre");
  const textInput2 = document.getElementById("categorie");
  const fileInput = document.getElementById("photo-input");

  validateModal2Button.addEventListener("click", function () {
    const title = textInput1.value;
    const catId = textInput2.value;
    const fileImg = fileInput.files[0];

    const formData = new FormData();
    formData.append("image", fileImg);
    formData.append("title", title);
    formData.append("category", catId);

    fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          alert("Votre projet a été ajouté avec succès");
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        textInput1.value = "";
        textInput2.value = "";
        fileInput.value = "";
        const preview = document.getElementById("preview");
        const addPic = document.getElementById("addPic");
        addPic.appendChild(iconePic);
        addPic.appendChild(formImg);
        formImg.appendChild(inputImg);
        addPic.appendChild(btnAjoutPhoto);
        addPic.appendChild(infoPic);
        addPic.removeChild(preview);
        document.getElementById("modal2").style.display = "none";
      })
      .catch((error) => {
        console.error("Problème d'envoi", error);
      });
  });
  // Evenement bouton******************************************************
  // Ouverture modale1********************************************************
  document
    .getElementById("modif-portfolio")
    .addEventListener("click", function () {
      document.getElementById("modal1").style.display = "flex";
    });
  //   femeture modale*******************************************************
  document
    .getElementById("croixFermeture")
    .addEventListener("click", function () {
      document.getElementById("modal1").style.display = "none";
    });

  //   Modal1 ajouter photo***********************************************
  document.getElementById("btnAddPic").addEventListener("click", function () {
    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "flex";
  });

  // Retour modale1********************************************************
  document.getElementById("retour2").addEventListener("click", function () {
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal1").style.display = "flex";
  });
  //   femeture modale2*****************************************************
  document
    .getElementById("croixFermeture2")
    .addEventListener("click", function () {
      document.getElementById("modal2").style.display = "none";
      textInput1.value = "";
      textInput2.value = "";
      fileInput.value = "";
      const preview = document.getElementById("preview");
      const addPic = document.getElementById("addPic");
      addPic.appendChild(iconePic);
      addPic.appendChild(formImg);
      formImg.appendChild(inputImg);
      addPic.appendChild(btnAjoutPhoto);
      addPic.appendChild(infoPic);
      addPic.removeChild(preview);
      document.getElementById("modal2").style.display = "none";
    });

  // bouton ajouter photo**************************************************
  document
    .getElementById("btnAjoutPhoto")
    .addEventListener("click", function () {
      document.getElementById("photo-input").click();
    });
  //  fermeture modal si click exterieur**************************************
  // const modal = document.querySelector(".modal");*************************
  const modalGen1 = document.querySelector("#modal1");
  const modalGen2 = document.querySelector("#modal2");
  const modal1 = document.querySelector("#modal-box");
  const modal2 = document.querySelector("#modal-box2");

  modalGen1.addEventListener("click", function (event) {
    if (
      event.target !== modal1 &&
      event.target.closest("#modal-box") === null
    ) {
      modalGen1.style.display = "none";
    }
  });
  modalGen2.addEventListener("click", function (event) {
    if (
      event.target !== modal2 &&
      event.target.closest("#modal-box2") === null
    ) {
      modalGen2.style.display = "none";
      textInput1.value = "";
      textInput2.value = "";
      fileInput.value = "";
      const preview = document.getElementById("preview");
      const addPic = document.getElementById("addPic");
      addPic.appendChild(iconePic);
      addPic.appendChild(formImg);
      formImg.appendChild(inputImg);
      addPic.appendChild(btnAjoutPhoto);
      addPic.appendChild(infoPic);
      addPic.removeChild(preview);
      document.getElementById("modal2").style.display = "none";
    }
  });
}
