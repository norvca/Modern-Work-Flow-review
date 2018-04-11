class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi there! This is " +this.name+ " and I'm " +this.age);
  }
}

// module.exports = Person;
export default Person;