validateModal2Button.addEventListener("click", function () {
  // Récupération des données de la modale
  const title = textInput1.value;
  const catId = textInput2.value;
  const fileImg = fileInput.files[0];
  console.log(title, catId, fileImg);

  if (title && catId && fileImg) {
    // Stockage des données dans le local storage
    localStorage.setItem("title", title);
    localStorage.setItem("categoryId", catId);
    localStorage.setItem("imageUrl", JSON.stringify(fileImg));
    // Fermeture de la modale
    document.getElementById("modal2").style.display = "none";
  } else {
    validateModal2Button.disabled = true;
    validateModal2Button.style.backgroundColor = "#cccccc";
  }
});

textInput1.addEventListener("input", function () {
  if (textInput1.value && textInput2.value && fileInput.files[0]) {
    validateModal2Button.disabled = false;
    validateModal2Button.style.backgroundColor = "";
  } else {
    validateModal2Button.disabled = true;
    validateModal2Button.style.backgroundColor = "#cccccc";
  }
});

textInput2.addEventListener("input", function () {
  if (textInput1.value && textInput2.value && fileInput.files[0]) {
    validateModal2Button.disabled = false;
    validateModal2Button.style.backgroundColor = "";
  } else {
    validateModal2Button.disabled = true;
    validateModal2Button.style.backgroundColor = "#cccccc";
  }
});

fileInput.addEventListener("change", function () {
  if (textInput1.value && textInput2.value && fileInput.files[0]) {
    validateModal2Button.disabled = false;
    validateModal2Button.style.backgroundColor = "";
  } else {
    validateModal2Button.disabled = true;
    validateModal2Button.style.backgroundColor = "#cccccc";
  }
});

// ***********************************************************
// test envoi en fetch
const text1 = textInput1.value;
const text2 = textInput2.value;
const file = fileInput.files[0];
const formData = new FormData();
formData.append("title", text1);
formData.append("categoryId", text2);
formData.append("imageUrl", file);

fetch("http://localhost:5678/api/works", {
  method: "POST",

  body: formData,
  headers: {
    accept: "application/json",
    "Content-Type": " multipart/form-data",
    Authorization: `Bearer`,
    bearerToken,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
