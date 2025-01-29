/* pour construire un objet il faut 
une fonction  constructeur dobjet

-we cant add a new propety to an object constructor
but to the object itself
-to add a function to an object to the 
constructor we do it trought
 the objectName.prototype.fuctionName
*/

class Person {
    constructor(lastName, firstName, age) {
        this.lastName = lastName,
            this.firstName = firstName,
            this.age = age;
    }
}

const maFille= new Person('honore','AGALA',46)

console.log(maFille);
