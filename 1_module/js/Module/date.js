// var moment = require('moment');
import moment from 'moment';
// import Cat from './oop.js';
import Cat, {Dog} from './oop.js';

const local = 'ko';
moment.locale(local);

const d = new Date();
console.log(d);
console.log(d.toLocaleString());

const m = moment();
console.log(m);
console.log(m.format('LLL'));
console.log(m.format('dddd'));
console.log(m.format('YYYY-MM-DD (ddd) hh:mm:ss'));

const writtenDate = moment('2024-04-30');
console.log(writtenDate.fromNow())


const navi = Cat;
console.log("🚀 ~ Cat:", Cat.bark)
const maxx = Dog;
console.log("🚀 ~ Dog:", Dog)
