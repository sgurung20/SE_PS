class Animal{//CLASS 
  constructor(name, age, color, legs, superPower){//is a function 
    this.name = name; 
    this.age = age; 
    this.color = color;//must add another property to method chain 
    this.legs = legs; 
    this.superPower = superPower;  
  }userSuperPower(){ 
    console.log(this.superPower);
  }
  speaks(){ 
    console.log("Woof!");
    }
  run(){ 
    console.log("I love to run!");
   } } 
  let dog = new Animal('Charlie', 16, 'red-brown' , 4, 'reads your mind'); 
  dog.userSuperPower();
  dog.speaks();
  dog.run();

  let puppy = new Animal('Darcy', 1, 'black and white', 4, 'makes you happy'); 
  puppy.userSuperPower();
  puppy.speaks();
  puppy.run();
