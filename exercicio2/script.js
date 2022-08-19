const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" },
  ],
};

// respostas aqui ⬇️

/* Primeiro ator */
const resposta1 = "Primeiro ator: " + filme.elenco[0];
console.log(resposta1);

/* Ultimo ator */
const resposta2 = "Segundo ator: " + filme.elenco[3];
console.log(resposta2);

/* Todas as tramissões de hoje */
const resposta3 =filme.transmissoesHoje;
console.log('Todos as transmissões de hoje: ', resposta3);


/* Horário de transmissão do filme no canal Brasil */
const resposta4 = filme.transmissoesHoje[1].horario;
console.log('Horário de transmissão do filme no canal Brasil: ',resposta4)