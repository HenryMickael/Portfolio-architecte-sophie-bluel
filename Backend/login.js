// Login
document.getElementById("login-champ").addEventListener("submit", function (e) {
  e.preventDefault();
  let emailLogin = document.getElementById("email-login");
  let passwordLogin = document.getElementById("password-login");
  let erreur = "";
  if (!emailLogin.value && !emailLogin.value) {
    erreur = "Veuillez entrer une adresse email & un mot de passe";
  }
  if (!emailLogin.value && passwordLogin.value) {
    erreur = "Veuillez entrer une adresse email.";
  } else if (!passwordLogin.value && emailLogin.value) {
    erreur = "Veuillez entrer un mot de passe.";
  }

  if (erreur) {
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  }

  const email = emailLogin.value;
  const password = passwordLogin.value;

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
      const userId = data.userId;
      localStorage.setItem("bearerToken", bearerToken);
      localStorage.setItem("userId", userId);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      document.getElementById("erreur").innerHTML = error.message;
    });
});
