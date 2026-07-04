
// Renders articles.html 5 times into .articles container
(() => {
  const container = document.querySelector(".articles_listing");
  if (!container) return;

  const times = 19;

  const load = () =>
    fetch("articles.html", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch articles.html (${res.status})`);
        return res.text();
      });

  Promise.all(Array.from({ length: times }, load))
    .then((htmlParts) => {
      // Insert as separate blocks so each fetch result is preserved
      container.innerHTML = htmlParts.join("\n");
    })
    .catch((err) => {
      console.error(err);
      container.innerHTML = "";
    });
})();

