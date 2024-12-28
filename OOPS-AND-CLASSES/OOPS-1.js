// OOP  and FACTORY FUNCTIONS

// Four Pillars of Object oriented programming

// *Encapsulation --
// *ABstraction -- not showing the complexity
// *Inheritance
// *Polymorphism

// const user = {
//   firstName: "Nihal",
//   lastName: "Singh",
//   age: 23,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };
// console.log(user.getAgeYear());

// Factory functions

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     // getBirthYear: createUser.commonMethods.getBirthYear,
//   };
//   return user;
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// Prototype

// const user1 = createUser("Tanvi", "Sharma", 23);
// const user2 = createUser("Nihal", "Sandhu", 23);
// console.dir(createUser);
// console.log(user1);
// console.log(user2);

function sayHi() {
  console.log("Hi");
}
console.log(new sayHi());

// new Keyword

function createUser2(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
createUser2.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
console.log(createUser2.prototype);
const user = new createUser2("SpiderMAn", "SuperHero", 19);
console.log(user);
