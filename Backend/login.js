document.getElementById("login-champ").addEventListener("submit", function (e) {
  e.preventDefault();
  let emailLogin = document.getElementById("email-login");
  let passwordLogin = document.getElementById("password-login");
  let erreur = "";

  if (!passwordLogin.value) {
    erreur = "Erreur dans l’identifiant ou le mot de passe";
  }
  if (!emailLogin.value) {
    erreur = "Erreur dans l’identifiant ou le mot de passe";
  }
  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML =
      "Erreur dans l’identifiant ou le mot de passe";
    return false;
  } else {
  }
});

// **********************************************************************

//   ************************************
const form = document.getElementById("login-champ");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Erreur dans l’identifiant ou le mot de passe");
      }
    })
    .then((data) => {
      const bearerToken = data.token;
      localStorage.setItem("userId", bearerToken);
      window.location.href = "./indexAdmin.html";
    })
    .catch((error) => {
      alert("Authentication failed: " + error.message);
    });
});
