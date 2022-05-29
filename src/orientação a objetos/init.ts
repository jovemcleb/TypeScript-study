class UserThree {
  public name;
  public age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Player extends UserThree {
  public game;
  constructor(name: string, age: number, game: string) {
    super(name, age);

    this.game = game;
  }

  currentGame() {
    return `${this.name} playing ${this.game}`;
  }

  static hoursNow() {
    return Date();
  }
}

const gamer = new Player("Cleb", 19, "Fortzin");
console.log(gamer.currentGame());
console.log(Player.hoursNow());
