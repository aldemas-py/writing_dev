
// Renders articles.html 19 times into .articles_listing container with unique images
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
      
      // Update each article image with Image1 through Image19
      const imageNames = [
        "image1.jpg", "image2.jpg", "image3.jpg", "Image4.jpg", "Image5.jpg",
        "Image7.jpg", "Image8.jpg", "image9.jpg", "Image10.jpg", "Image11.jpg",
        "image12.jpg", "Image13.jpg", "Image14.jpg", "Image15.jpg", "image16.jpg",
        "Image17.jpg", "Image18.jpg", "Image20.jpg"
      ];
      
      const images = container.querySelectorAll(".article_image img");
      images.forEach((img, index) => {
        if (imageNames[index]) {
          img.src = `images/${imageNames[index]}`;
          img.alt = `Article Image ${index + 1}`;
        }
      });
    })
    .catch((err) => {
      console.error(err);
      container.innerHTML = "";
    });
})();

