
//Write a “person” class to hold all the details.
class person {
    constructor(FirstName,LastName,DOB,Qualification){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.DOB=DOB;
        this.Qualification=Qualification;
    }
     firstName(){return this.FirstName}
     lastName(){return this.LastName}
     dob(){return this.DOB}
     qualification(){return this.Qualification}
}
let person1 = new person('Ajay',"kumar","22-2-2000","B.Tech");
console.log(`name:${person1.firstName()} ${person1.lastName()} 
DOB:${person1.dob()}
qualification: ${person1.qualification()}`);

//write a class to calculate uber price.
class uber{
    constructor(km){
        this.km = km;
    }
    price(){return `The amount you have to pay for uber is ${ this.km*7}`;}
}
let cus1 =new uber(12);
console.log(cus1.price());

