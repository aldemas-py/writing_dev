const nav = document.querySelector(".articles");
fetch("articles.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });
