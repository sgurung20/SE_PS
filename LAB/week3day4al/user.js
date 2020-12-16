// Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class

class User{
  constructor(firstName, lastName, department){
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }
  changeDepartment()
}

const User1 = new User("Sally", "Brown", "IT dept");
const User2 = new User("Jack", "Doe", "HR dept");
const User3 = new User("Sam", "Lee", "SE dept");

User2.changeDepartment(“IT”);
 console.log(Usser2);
