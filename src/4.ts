class Key {
  protected signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return `Signature: ${this.signature}`;
  }
}

class Person {
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("person entered the house.");
    } else {
      console.log("The door is locked. You cannot enter.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (this.key && key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is unlocked. You can enter.");
    } else {
      console.log("Invalid key. The door remains locked.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
