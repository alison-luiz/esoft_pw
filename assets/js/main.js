const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const evolucao = urlParams.get("evolucao");

if (evolucao) {
  document.title = `Página do ${evolucao}`;

  const h2 = document.querySelector(`.info-pokemon`);
  h2.textContent = `Informações sobre ${evolucao}`;

  const div = document.querySelector(`.pokemon-image`);
  const nameToLowerCase = evolucao.toLowerCase();
  const image = fetch(`https://pokeapi.co/api/v2/pokemon/${nameToLowerCase}`);

  image
    .then((response) => response.json())
    .then((data) => {
      const sprites = Object.values(data.sprites);
      const images = sprites.filter((sprite) => typeof sprite === "string");
      const img = document.createElement("img");
      img.src = images[0];
      div.appendChild(img);

      let index = 0;
      img.addEventListener("click", () => {
        index++;
        if (index === images.length) {
          index = 0;
        }
        img.src = images[index];
      });
    });
}
