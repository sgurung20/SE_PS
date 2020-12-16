var VendingMachine = {
  snacks: [//THIS IS OUR ARRAY CONSTRUCTOR THAT HAS 3 DIFFERENT ITEMS, AN ARRAY INSIDE AN OBJECT MUST HAVE [{I1},{I2}] TO PULL MULTIPLE DATA ON SAME INDEX
      { name: 'Doritos Diablo',
        price: 1.50,
      },
      { name: 'Takis',
        price: 1.75,
      },
      { name: 'Cheetos',
        price: 0.25
      }
    ],
vend(indexPosition){//THIS FUNCTION VEND WILL CALL THE CONSTRUCTOR SNACK INSIDE OUR VENDING MACHINE
console.log(this.snacks[indexPosition]);
}
}
VendingMachine.vend(1); //THIS WILL CALL THE INDEX NUMBER THAT HAS OUR SNACKnode
