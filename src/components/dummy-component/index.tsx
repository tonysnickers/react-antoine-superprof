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
