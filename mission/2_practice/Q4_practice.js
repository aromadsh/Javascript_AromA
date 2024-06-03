const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);

const template = (sfn) => {
  before();
  return (name, greeting) => {
    sfn(name, greeting);
    return after();
  }
}

const temp = template(someFn);

temp('lnsol', 'hello');