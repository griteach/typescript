function divide(a: number, b: number) {
  return a / b;
}

let a: number[] = [1, 2, 3];
let b: string[] = ["il", "jaden"];
let c: boolean[] = [true, false];

interface IPlayer {
  readonly name: string;
  age: number;
}

const player: IPlayer = {
  name: "jaden",
  age: 30,
};

function myFoo(name: string, age: number): IPlayer {
  return {
    name: name,
    age: age,
  };
}

const sangjun = myFoo("jaden", 30);

const mySecondFoo = (name: string, age: number): IPlayer => {
  return {
    name,
    age,
  };
};

//overloading
type MyAdd = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const myAddFunc: MyAdd = (a, b, c?: number) => a + b;

myAddFunc(1, 2, 3);
myAddFunc(1, 2);

type OverloadingTest = {
  (a: string, b: number): void;
  (a: number, b: string): void;
};

const MyOver: OverloadingTest = (a, b) => {
  if (typeof a === "string" && typeof b === "number") {
    b + 1;
  } else if (typeof a === "number" && typeof b === "string") {
    a + 1;
  }
};

MyOver(1, "myName");
MyOver("yourname", 2);

// generic

type MyGeneric = {
  <T, V>(a: T, b: V[]): void;
};

const myGenFunc: MyGeneric = (a, b) => {
  console.log(a, b);
};

myGenFunc({ name: "nico", age: 3 }, [1, 2, 3, 4]);
