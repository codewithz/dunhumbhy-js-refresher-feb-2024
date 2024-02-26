// Objects, functions,variable --> camelCasings
// Class --> PascalCasing

// onetwothreefour

// camelCasing --> oneTwoThreeFour
// PascalCasing --> OneTwoThreeFour

// displayDetails()
// PersonComponent 



class Person{

    constructor(name){
        this.name=name;
        console.log("Name:",this.name);
        this.city="Mumbai"
    }

    walk(){
        console.log(this.name," is walking in ",this.city)
    }



}

const person1=new Person("Zartab")
person1.walk()
