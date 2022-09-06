// var Human = function (type){
//     this.type = type || 'human';
// };

// //true 가지는 함수
// Human.isHuman = function(human){
//     return human instanceof Human;
// }

// Human.prototype.breathe = function()
// {
//     alert('h-a-a-a-m');
// };

// var Zero = function(type, firstName, lastName){

//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;// 상속
// Zero.prototype.sayName = function(){
//     alert(this.firstName + ' ' + this.lastName);
// };

// var oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero); //true

class Human {

    //생성자
    constructor(type = 'human')
    {
        this.type = type;
    }
    static isHuman(human)
    {
        return human instanceof Human;
    }
    breathe()
    {
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{
    //생성자
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName()
    {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero','Cho');
const result = Human.isHuman(newZero);

console.log(result);