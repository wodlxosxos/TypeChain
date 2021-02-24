class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
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


const sayHi = (person: Human): void =>{
    console.log(
        `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
    )
}

sayHi(lynn);

export {};