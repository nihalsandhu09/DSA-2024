class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Nihal", "Sandhu", 23);
console.log(user1);
console.log(user1.getBirthYear());
console.log(user1.getFullName());
