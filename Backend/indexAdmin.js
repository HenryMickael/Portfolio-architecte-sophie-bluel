fetch("http://localhost:5678/api/works", {
  method: "POST",
  headers: {
    Authorization: "Basic " + "email:password",
    // "userId" + "Token",
  },
  body: JSON.stringify("id", "title", "imageUrl", "categoryId", "userId"),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
