const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
window.addEventListener("DOMContentLoaded", () => getPokemon())

async function getPokemon() {
  try {
    console.log("buscando")
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data)
    const pokemonSprite = data.sprites.front_default;
    const contenedor = document.getElementById("contenedor-pokemon");

    const sprite = document.createElement("img");
    sprite.src = pokemonSprite;

    const nombre = document.createElement("h3");
    nombre.innerHTML = data.name.toUpperCase();

    contenedor.appendChild(sprite);
    contenedor.appendChild(nombre);
    const cantidadTipos = data.types.length;
    for (let i = 0; i < cantidadTipos; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${data.types[i].type.name}`;
      div.className = `${data.types[i].type.name}`
      contenedor.appendChild(div);
    }
    contenedor.style.display = "block";
    console.log(data);
  } catch {}
}
