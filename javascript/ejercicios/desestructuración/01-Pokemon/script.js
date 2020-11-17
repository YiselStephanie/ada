const bulbasaur = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
  modifiers: {
    weakness: ["fire, ice", "flying", "psychic"],
    resistances: ["water", "grass", "electric", "fighter"],
  },
};

const charmander = {
  name: "Charmander",
  type: "fire",
  ability: {
    primary: "Blaze",
    hidden: "Solar Power",
  },
  stats: {
    hp: 39,
    attack: 52,
    deffense: 43,
    speed: 65,
  },
  moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
  modifiers: {
    weakness: ["water", "ground", "rock"],
    resistances: ["fire", "ice", "grass", "steal"],
  },
};

const squirtle = {
  name: "Squirtle",
  type: "water",
  ability: {
    primary: "Torrent",
    hidden: "Rain Dish",
  },
  stats: {
    hp: 44,
    attack: 48,
    deffense: 50,
    speed: 43,
  },
  moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
  modifiers: {
    weakness: ["electric", "grass"],
    resistances: ["water", "fire", "ice", "steel"],
  },
};

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
    secondary: "Discharge",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
  modifiers: {
    weakness: ["ground"],
    resistances: ["electric", "flying", "water", "steel"],
  },
};

// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es resistente

// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }

// const resistsMove = (pokemon, movimiento) => {
//   const {
//     modifiers: { resistances },
//   } = pokemon;
//   const { type } = movimiento;
//   return resistances.includes(type);
// };

// const resistsMove = ({ modifiers: { resistances } }, { type }) => {
//   return resistances.includes(type);
// };

// console.log(resistsMove(pikachu, { name: "Rain dance", type: "water" }));

// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

// Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca

// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

// const addAbility = (pokemon, habilidad) => {
//   for (let prop in habilidad) {
//     pokemon.ability[prop] = habilidad[prop];
//   }
// };

// const addAbility2 = (pokemon, habilidad) => {
//   for (const prop in habilidad) {
//     pokemon.ability[prop] = habilidad[prop];
//   }

//   console.log(pokemon);
// };

// addAbility2(charmander, { secondary: "Discharge" });

// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

/*
Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
- 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
- 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
- 1, si no es débil ni resistente
*/
