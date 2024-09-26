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

function getAgeYear() {
  return new Date().getFullYear() - this.age;
}
function createUser(firstName, lastName, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getAgeYear,
  };
  return user;
}
const user1 = createUser("Tanvi", "Sharma", 23);
const user2 = createUser("Nihal", "Sandhu", 23);
console.log(user1.getAgeYear);
// console.log(user1.getAgeYear());
// console.log(user1.getAgeYear === user2.getAgeYear);
