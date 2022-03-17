class Cat { 
    constructor(name) {
      this.name = name;
    } 
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  class Lion extends Cat {
    speak() {
    //   super.speak();
      console.log(this.name + ' roars.');
    }
  }
  let mycat = new Cat('rani');
  console.log(mycat.speak());
  let myloin = new Lion('mosafa');
  console.log(myloin.speak());