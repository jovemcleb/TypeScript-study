function principal(): void {
  console.log("executando");
}
// sem retorno definido === undefined

//never: função que nunca retorna // loops infinitos e erros

function funcSemReturn(): never {
  while (true) {}
}

function fnTwo(): never {
  throw new Error("algum erro");
}
