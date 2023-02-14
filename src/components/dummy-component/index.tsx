// INTERFACE
interface IProps {
  title: string;
  price: number;
  isValid: boolean;
  fruits: string[]; //Array<string> // type Fruit = string fruits:Fruit[]
  user: Record<string, string>; //{[key:string]: string}
  type?: "french" | "spanish" | "italian";
}

// Record<K, T>
// K = type de la clef, T= type de la valeur
// Record: every key K should be of type T

type Person = Record<"firstName" | "lastName", string>;

// const joe:Person = {
//     firstName: "joe",
//     lastName: "dalton"
// }

// INTERFACE IS EXTENSIBLE
interface Animal {
  claws: boolean;
  price: number;
  name: string;
}

interface Dog extends Animal {
  race: "golden" | "bulldog";
  claws: boolean;
  price: number;
}

interface Cat extends Animal {
  purs: boolean;
}

const dog: Dog = {
  claws: true,
  price: 23,
  race: "golden",
};
type Foo = {
  name: string;
};

type MergedFoo = { age: number } & Foo;

const foo: MergedFoo = {
  age: 99,
  name: "joe",
};

// PICK => chose only certain property from type
// Pick<K, V>

function isFrench(props: Pick<IProps, "type" | "title">): boolean {
  return props.type === "french";
}

// OMIT => exclude certain properties from type
// Omit<K, V>
const isItalian = (props: Omit<IProps, "fruits" | "user">): boolean => {
  return props.type === "italian";
};

// REQUIRED => make all properties compulsory
// Required<T>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isSpanish = (props: Required<IProps>): boolean => {
  return props.type === "spanish";
};

// PARTIAL => make all properties optional
// Partial<T>
const isSpanish2 = (props: Partial<IProps>): boolean => {
  return props.type === "spanish";
};
// READONLY => the typed variable is NOT editable
// Readonly<T>
const values: Readonly<number[]> = [1, 2, 3, 4, 5]; // ReadonlyArray<number>
// values.push(55)

type Point = {
  x: number;
  y: number;
};

const point: Readonly<Point> = {
  x: 4,
  y: 2,
};

// point.x =56

// KEYOF => créer une union de clefs d'object/type
// "name" | "age" | "car"

type UserBasic = {
  name: string;
  age: 77;
  car: "twingo";
};

function formatUser(key: keyof UserBasic): boolean {
  return key === "age";
}

// TEMPLATE LITERAL
type Hexcode = `#${string}`;

type Styling = {
  type: "dark" | "light";
  color: Hexcode;
};

const dark: Styling = {
  type: "dark",
  color: "#fff",
};

// TYPEOF
const rectA = {
  width: 200,
  height: 100,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return this.width * 2 + this.height * 2;
  },
};

type Rect = typeof rectA;

// TYPEGUARD
// la valeur de sortie prend un type précis
const medor: Dog = {
  claws: true,
  price: 99,
  name: "medor",
  race: "bulldog",
};
const huxley: Cat = {
  claws: true,
  price: 77,
  name: "huxley",
  purs: true,
};

type Pet = Cat | Dog;

function isDog(pet: Pet): pet is Dog {
  return pet.name == "medor";
}

// function pour afficher des parametres d'édition en fonction de l'animal
// si on retournait boolean au lieu de pet is Dog en sortie de isDog(),
//  on n'aurait pas l'autocomplétion intelligente!
function getOptions(pet: Pet) {
  if (isDog(pet)) {
    // si jamais isDog() est true, alors pet sera de type Dog
    return pet.race; // du coup, on a accès à toutes les propriétés du chien, typescript est intelligent!
  } else {
    return pet.purs;
  }
}

// EXTRACT
// extract all properties from T that are assignable to K
const rect = {
  width: 200,
  height: 100,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return this.width * 2 + this.height * 2;
  },
};

const circle = {
  r: 50,
  area() {
    return this.r * this.r * Math.PI;
  },
  perimeter() {
    return 2 * this.r * Math.PI;
  },
};

// "area" | "perimeter"
type GeoFunctions = Extract<keyof typeof rect, keyof typeof circle>;

// EXCLUDE: opposite of Extract<T,K>. Keep only T's properties that are not assigable to K
// keep only: "width" | "height" (with and heigh tare are not assignable to circle)
type GeoDiff = Exclude<keyof typeof rect, keyof typeof circle>;

//GENERIC
// GENERIC => T's type is unknown, but will be infered from the parameter when the function is called
function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

getRandomElement([43, 76]);
getRandomElement(["hello", "world"]);

// many generics
function merge<T, K>(obj1: T, obj2: K): T & K {
  return {
    ...obj1,
    ...obj2,
  };
}

const lolo = merge({ name: "joe" }, { age: "88" });
lolo.age;

type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page:number
}

type MyUser = {name:string, age:number;}

type PaginatedUsers = PaginatedResponse<MyUser>

type PaginatedProducts = PaginatedResponse<{price:number; id:string}>

function getUserNames(users: PaginatedUsers){
  return users.data.map((user) => user.age)
}


function updateUsers<T extends keyof PaginatedUsers>(users:PaginatedUsers, key:T, value: PaginatedUsers[T]){
return {
 ...users,
  [key]: value
}
}

const dummyUsers: PaginatedUsers = {
  data: [],
  total: 0,
  page: 1,
};

updateUsers(dummyUsers, "data", [{name:"joe", age:88}]);

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
