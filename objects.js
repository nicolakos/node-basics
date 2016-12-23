var person = {
  gender: 'male',
  'eyeColor': 'brown'
};
var firstNameProperty = 'firstName';

person[firstNameProperty] = 'Nikos'; 
person.lastName = 'M' ;
person.age = 28;

delete person.age;

console.log(person);

function greetUser (person) {
  console.log ('Hello ' + person.firstName + ' ' + person['lastName']);
}

greetUser(person);