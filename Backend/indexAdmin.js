fetch("http://localhost:5678/api/users/login", {
  headers: {
    Authorization: "Bearer " + bearerToken,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
