// actions.js
document.addEventListener("DOMContentLoaded", () => {
  const imagen = document.getElementById("imagenPokemon");
  const descripcion = document.querySelector(".content p");

  const pokemones = {
    larvitar: {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
      texto: "Larvitar es un Pokémon de tipo roca/tierra con una piel verde y una expresión determinada. Nace bajo tierra y debe comer suficiente tierra para salir a la superficie. Es fuerte desde joven y tiene un potencial enorme."
    },
    Morelull: {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
      texto: "Morelull es un Pokémon parecido a un hongo que emite esporas brillantes por la noche. Vive en bosques tranquilos y se mueve buscando nutrientes. Su aspecto mágico y su luz suave lo hacen parecer un espíritu del bosque."
    },
    Mrmime: {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
      texto: "Mr. Mime es un Pokémon con apariencia de mimo que utiliza barreras invisibles y gestos teatrales para comunicarse y protegerse. Es conocido por su talento para el espectáculo y su precisión en movimientos."
    }
  };

  document.querySelectorAll("a[data-pokemon]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pokemon = e.target.getAttribute("data-pokemon");

      if (pokemones[pokemon]) {
        imagen.src = pokemones[pokemon].img;
        descripcion.textContent = pokemones[pokemon].texto;
      }
    });
  });
});