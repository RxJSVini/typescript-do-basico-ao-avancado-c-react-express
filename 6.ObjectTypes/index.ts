function getInputChange(): void {
  const email: HTMLInputElement | null = document.querySelector("#email");
  console.log(email?.value);
}

document.addEventListener("keypress", getInputChange);

//1 - Tipos de objetos para funçao com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  if (product.isAvailable) {
    return `O produto está disponível`;
  }
}

console.log(
  showProductDetails({ name: "Tenis", price: 199, isAvailable: true })
);

// 2 - Pripriedades opcionais na interface

interface User {
  email: string;
  role?: string;
}

function showUSerDetails(user: User) {
  if (user.role) {
    return `A função do usuário ${user.email} é ${user.role}`;
  }
}

console.log(showUSerDetails({ email: "user@email.com" }));
console.log(showUSerDetails({ email: "admin@email.com", role: "admin" }));

// 3 - Readonly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca2: Car = {
  brand: "WW",
  wheels: 4,
};

console.log(fusca2);

// 4 - index signature

interface Person {
  [index: string]: string;
}
const person: Person = {
  name: "Vinicius",
};

console.log(person);

// 5 - extending interfaces
interface Human {
  name: string;
}
interface SuperHuman extends Human {
  age: number;
}

const goku: SuperHuman = {
  name: "Vinicius",
  age: 25,
};

console.log(goku);

// 6 - intersetion types

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "shotgun",
  caliber: 12,
};

console.log(arnold);

//7 - ReadOnly array

let myArr: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"];
console.log(myArr);

// 8 - Tuplas

type fiveNumbers = [number, number, number, number];

const myNumberTuple: fiveNumbers = [1, 2, 3, 4];

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Vinicius", 30];

//9 - Tuplas com readonlys

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

// 10 - Enum

enum StatusMailSend {
  send = 1,
  error = 2,
  wait = 3,
}

interface IMessage {
  to: string;
  fromTo: string;
  subject?: string;
  detail?: string;
  status?: StatusMailSend;
}

class SendMailService implements IMessage {
  fromTo;
  to;
  subject;
  detail;
  status;
  constructor({ to, fromTo, subject, detail, status }: IMessage) {
    this.fromTo = fromTo;
    this.to = to;
    this.subject = subject;
    this.detail = detail;
    this.status = status;
  }
}

const sendMessage = new SendMailService({
  to: "viniciuspoa2@gmail.com",
  fromTo: "cliente@gmail.com",
  subject: "Teste envio de e-mail",
  detail: "Este é um exemplo de serviço de envio de e-mails com typescript",
  status:StatusMailSend.wait
});

