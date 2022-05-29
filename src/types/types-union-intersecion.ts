type User = {
  name: string;
  lastName: string;
  birthday: string;
  age?: number;
};

let usuario: User = {
  name: "Cleb",
  lastName: "Lima",
  birthday: "21/11/2002",
  age: 19,
};

//union types |
type LogLevel = "info" | "Error" | "debug";

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

//intersection types &

type About = {
  bio: string;
  interests: string[];
};

type Profile = User & About;
const userWithProfile: Profile = {
  name: "Cleb",
  lastName: "Lima",
  birthday: "21/11/2002",
  bio: "PIPIPIPOPOPO",
  interests: ["pi", "pi", "pi", "po", "po", "po"],
};

type ComposedProfile = User & {
  log: LogLevel;
};
