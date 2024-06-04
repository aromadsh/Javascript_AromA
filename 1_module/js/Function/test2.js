const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = () => {
let widx = -1;
  return function () {
    if (widx >=weeks.length) widx = 0;
    return `${weeks[widx++]}요일`
  };
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect! (이 것을 못 하도록!)
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 12) clearInterval(intl);
}, 500);

