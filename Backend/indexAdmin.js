fetch("http://localhost:5678/api/works", {
  method: "GET",
  headers: {
    Authorization: "userId" + bearerToken,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
