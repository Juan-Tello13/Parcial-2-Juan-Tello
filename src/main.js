const btn_kanto = document.getElementById("kanto");
btn_kanto.addEventListener("click", () => armarTablas(1));

const btn_johto = document.getElementById("johto");
btn_johto.addEventListener("click", () => armarTablas(2));

const btn_hoenn = document.getElementById("hoenn");
btn_hoenn.addEventListener("click", () => armarTablas(3));

async function getGeneracion(num) {
  try {
    const url = `https://pokeapi.co/api/v2/generation/${num}`;

    const res = await fetch(url);
    let generacion = await res.json();

    console.log(generacion);
    return generacion;
  } catch (error) {
    console.error(error);
  }
}

async function armarTablas(num) {
  try {

    const generacion = await getGeneracion(num);

    let cantidadPokemon = generacion.pokemon_species.length;
    const tabla = document.getElementById("lista");
    tabla.innerHTML="<tr><td>ID</td><td>Nombre</td><td>Ver</td></tr>";

    for (let i = 0; i < cantidadPokemon; i++) {

      const tr = document.createElement("tr");

      const id = document.createElement("td");
      id.className = "id";
      id.innerHTML = i + 1 + ".";
      
      const nombre = document.createElement("td");
      nombre.innerHTML = `${generacion.pokemon_species[i].name}`.toUpperCase();

      const ir = document.createElement("td");
      const ir_btn = document.createElement("button");
      ir_btn.addEventListener("click", () => {window.location.href=`./pokemon.html?id=${generacion.pokemon_species[i].name}`;});
      ir_btn.innerText= "Ver"
      ir_btn.className="btn_ver";

      ir.appendChild(ir_btn)

      tr.appendChild(id);
      tr.appendChild(nombre);
      tr.appendChild(ir)
      tabla.appendChild(tr);
    }
    tabla.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
/*
async function fetchData() {
  try {
    const nombrePokemon = document
      .getElementById("nombrePokemon")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    );

    if (!response.ok) {
      throw new Error("Algo salio mal");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
*/
