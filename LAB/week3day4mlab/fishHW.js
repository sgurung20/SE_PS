class Fish{ 
  constructor(){ 
   console.log("I'm a fish"); 
 } 
   swim(){ 
  console.log("I can swim"); 
} 
} 

  class Nemo extends Fish{ 
    constructor(color){ 
    super();//if same costructor, no super() key here.     console.log("I'm Nemo"); 
    //always required to be at the first line in the constructor
    this.color = color; 
} 
} 
var nemo = new Nemo('orange'); 
nemo.swim(); 
