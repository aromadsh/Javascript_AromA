const dog = {
    name: 'Maxx',
    showMyName() {
      console.log(`My name is ${dog.name}.`);
    },
    whatsYourName() {
      setTimeout(this.showMyName, 1000);
    }
};
  
  dog.whatsYourName();
  