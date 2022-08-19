/* Objeto original */
const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};
console.log("Original: ", pokemon1);


/* Cópia espelhada */
const copiaPokemon1 = { ...pokemon1 };
(copiaPokemon1.nome = "Squirtle"), (copiaPokemon1.tipo = "Água");

console.log("Cópia alterada: ", copiaPokemon1);

/* Adicionando propriedade */
pokemon1.ataques = [];
pokemon1.ataques.push({
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
});
console.log("Propriedades adicionadas ", pokemon1);

copiaPokemon1.ataques = [
   ...pokemon1.ataques 
]

console.log(copiaPokemon1.ataques)

pokemon1.ataques.push({
    nome: "Folha navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
  });

  copiaPokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
  });

  console.log(pokemon1)