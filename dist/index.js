"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("lynn", 24, "female");
const person = {
    name: "younghoon",
    age: 23,
    gender: "male"
};
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
sayHi(lynn);
//# sourceMappingURL=index.js.map