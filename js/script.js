
// Renders articles.html with different images cycling through Image1, Image2, Image3
(() => {
  const container = document.querySelector(".articles_listing");
  if (!container) return;

  const times = 19;
  const images = ["Image1", "Image2", "Image3"];

  fetch("articles.html", { cache: "no-store" })
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch articles.html (${res.status})`);
      return res.text();
    })
    .then((htmlTemplate) => {
      const htmlParts = Array.from({ length: times }, (_, index) => {
        const imageIndex = index % images.length;
        const imageName = images[imageIndex];
        // Replace the image src with the current image in rotation
        return htmlTemplate.replace(
          /src="images\/[^"]*\.png"/,
          `src="images/${imageName}.png"`
        );
      });
      container.innerHTML = htmlParts.join("\n");
    })
    .catch((err) => {
      console.error(err);
      container.innerHTML = "";
    });
})();

