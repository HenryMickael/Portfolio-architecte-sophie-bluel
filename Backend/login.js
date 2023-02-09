// *******************************************************************
// *******************************************************************
// document.getElementById("login-champ").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let emailLogin = document.getElementById("email-login");
//   let passwordLogin = document.getElementById("password-login");
//   let erreur = "";

//   if (!emailLogin.value) {
//     erreur = "Veuillez entrer une adresse email.";
//   }
//   if (!passwordLogin.value) {
//     erreur = "Veuillez entrer un mot de passe.";
//   }
//   if (erreur) {
//     document.getElementById("erreur").innerHTML = erreur;
//     return false;
//   }
// });

// const form = document.getElementById("login-champ");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = document.getElementById("email-login").value;
//   const password = document.getElementById("password-login").value;

//   fetch("http://localhost:5678/api/users/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//         else {
//           throw new Error(
//             "Erreur lors de la connexion. Veuillez vérifier vos informations."
//           );
//         }
//     })
//     .then((data) => {
//       const bearerToken = data.token;
//       const userId = data.userId;
//       localStorage.setItem("bearerToken", bearerToken);
//       localStorage.setItem("userId", userId);
//       window.location.href = "./index.html";
//       //   console.log(userId);
//     })
//     .catch((error) => {
//       document.getElementById("erreur").innerHTML = error;
//     });
// });

// test
document.getElementById("login-champ").addEventListener("submit", function (e) {
  e.preventDefault();
  let emailLogin = document.getElementById("email-login");
  let passwordLogin = document.getElementById("password-login");
  let erreur = "";

  if (!emailLogin.value) {
    erreur = "Veuillez entrer une adresse email.";
  } else if (!passwordLogin.value) {
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
      document.getElementById("erreur").innerHTML = error;
    });
});
