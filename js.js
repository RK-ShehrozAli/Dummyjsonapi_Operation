document.getElementById("save_form").addEventListener("click", function (e) {
  e.preventDefault();
  var obj = {
    id: document.getElementById("userid").value,
    title: document.getElementById("title.text").value,
    price: document.getElementById("price.text").value,
    brand: document.getElementById("brand.text").value,
  };
  fetch("https://dummyjson.com/products/add",{
    method: "post",
    body: JSON.stringify(obj),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
