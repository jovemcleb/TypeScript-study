//class
class UserThree {
  public name;
  public age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//extends Herança
class Player extends UserThree {
  public game;
  constructor(name: string, age: number, game: string) {
    super(name, age);

    this.game = game;
  }

  currentGame() {
    return `${this.name} playing ${this.game}`;
  }
  //static
  static hoursNow() {
    return Date();
  }
}

const gamer = new Player("Cleb", 19, "Fortzin");
console.log(gamer.currentGame());
console.log(Player.hoursNow()); //acesso direto pela class usando static

//Private, Protected, Public
class Game {
  protected nome; //acessado dentro da classe e por subclasses
  constructor(nome: string) {
    this.nome = nome;
  }

  showName() {
    return `O nome do game é ${this.nome}`;
  }
}

// class gameDescription extends Game {
//   private descricao; // acessado apenas dentro da classe

//   constructor(nome: string, descricao: string) {
//     super(nome);

//     this.descricao = descricao;
//   }

//   sayNameDescription() {
//     return `O nome é ${this.nome}: ${this.descricao}`;
//   }
// }

const fort = new Game("Fortnite");
console.log(fort);

//Interface
interface GameWithDescription {
  // nome:string
  descricao: string;
  sayNameDescription(): string;
}
//implements
class gameDescription extends Game implements GameWithDescription {
  public descricao; // acessado apenas dentro da classe

  constructor(nome: string, descricao: string) {
    super(nome);

    this.descricao = descricao;
  }

  sayNameDescription() {
    return `O nome é ${this.nome}: ${this.descricao}`;
  }
}
