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

//타입스크립트가 추론하도록 두는것이 좋다.
//T라는 제네릭을 이용해서 함수를 만들어 주면, 그 위치에 어떤 타입이 오더라도 타입스크립트가 잘 해석해준다.
function superPrint<T>(a: T[]) {
  return a[0];
}

//타입스크립트가 타입을 자동으로 추론한다.
superPrint([1, 2, 3, 4]);
//number타입을 넣어줘도 되지만, 되도록 타입스크립트가 추론하게 두자.
superPrint<number>([1, 2, 3, 7]);

superPrint(["abc", "abf"]);
superPrint([true, false, true, false]);
superPrint([1, "df", true]);

//type을 만들때 제네릭을 사용할 수 있다.
type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoProfile = {
  age: number;
  power: string;
};

type NicoPlayer = Player<NicoProfile>;

const nico: NicoPlayer = {
  name: "jaden",
  extraInfo: {
    age: 15,
    power: "good",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

//classes

class SoccerPlayer {
  constructor(
    private name: string,
    private age: number,
    public nickName: string
  ) {}
}

const player1 = new SoccerPlayer("jaden", 10, "bravo");

//접근할 수 있는 것은 nickName밖에 없다.
//name, age는 private기 때문.
//하지만 자바스크립트에서는 이런 보호장치가 없다. 오직 타입스크립트 내에서만 보호해 준다.
player1.nickName;

//abstract class
//추상클래스는 다른 클래스가 상속받을 수 있는 클래스
//직접 인스턴스를 만들 순 없고, 하위 클래스에서만 가능. 즉, 상속해주는데 목적이 있는 클래스.
abstract class NewPlayer {
  constructor(
    private name: string,
    private age: number,
    public nickName: string
  ) {}

  //메소드 = 클래스 안의 함수
  //추상메소드는 추상클래스 안에서 만들 수 있다.
  //실행 부분을 비워두면 된다.
  //리턴을 다 지우면 추상메소드가 된다.
  //하위 클래스에서 각자 다르게 채울 수 있게 되는 것.
  abstract getFullName(): void;
}

class NewPlayerExtends extends NewPlayer {
  getFullName(): void {}
}
class OldPlayerExtends extends NewPlayer {
  getFullName(): void {}
}

const myNewPlayer = new NewPlayerExtends("j", 10, "hg");
const myOldPlayer = new OldPlayerExtends("yulim", 20, "park");
myNewPlayer.nickName;
myNewPlayer.getFullName();

const yourName = myOldPlayer.getFullName();

type Words = {
  //몇 개의 프로퍼티가 들어올지는 모르지만, 그 타입은 알고 있을 때 쓴다.
  //아래는 키가 스트링, 밸류도 스트링인 경우
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {}
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
