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
