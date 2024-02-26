class Person{
    constructor(name){
        this.name=name;
        console.log("Name:",this.name);
       
    }
    walk(){
        console.log(this.name," is walking ")
    }
}

// ------------------------------------------------

class Trainer extends Person{

    constructor(name,degree){
        super(name);
        this.degree=degree;
    }

    train(){
        console.log(`Trainer ${this.name} is training and have a degree: ${this.degree}`);
    }
}

const trainer1=new Trainer("Thomas","Masters in IT");
trainer1.train()