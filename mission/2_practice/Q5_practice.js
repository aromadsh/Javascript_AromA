const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const getNextWeek = (() => {
  let widx = 0;
  return function () {
    return `${weeks[widx++ % 7]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 200);