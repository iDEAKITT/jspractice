//{number}
var int = 1;
var float = 1.0;
var hex = 0x123;

//{string}
var string = 'hello';

//{regexp}
var reg = /^[0-9]*$/;

//{object}
var obj = {hoge: 'fuga'};
var array = [1,2,3];

//{function}
var func = function(){
  return 1;
}

function Human(){}

Human.prototype = {
  hairStyle: 'Bob',
  eyeColor: 'blue',
  mouthType: 'Duck'
}

//{user definiation type}
function Employee(attr){
  this.name = attr.name;
  this.age = attr.age;
  this.div = attr.div;
}

Employee.prototype = new Human();


function Div(divId){
  this._divMap = {
    1: 'sales',
    2: 'tec'
  }
  this.divId = divId;
}

Div.prototype.toString = function(){
  return this._divMap[this.divId];
}

// type of employee.
var employee = new Employee({});
employee.name = 'Jack';
employee.age = 36;
employee.div = new Div(1);

var employee2 = new Employee({
  name: 'Chloe',
  age: 30,
  div: new Div(2)
});

console.log(employee.hairStyle);
console.log(employee.div.toString());
console.log(employee2);
