//Type assertion
type JogoAssertion = {
  nome: string;
  descricao: string;
};

let jogo = {} as JogoAssertion;
// let jogo = <JogoAssertion>{};

jogo.nome = "asdsadada";
jogo.descricao = "description of game";
