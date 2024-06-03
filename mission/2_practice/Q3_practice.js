const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = () => console.log('do something...1');

const template = (sfn) => {
    before();
    sfn();
    return after();
}

const temp = template(someFn);

temp();