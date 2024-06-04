function currentCount() {
    let currCount = 0; // private variable
    return {
      connect() { currCount += 1; },    connect: function() { currCount = currCount + 1; }
      disconnect() { currCount -= 1; }, disconnect: () => { currCount = currCount - 1; }
      getCount() { return currCount; },   // getter method
      get count() { return currCount; },  // 값을 갖는 프로퍼티가 됨 (get을 붙임으로써  )
    };
  }
  
  const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장'];
  
  const counter = currentCount();
  for (const action of actions) {
    action === '입장' ? counter.connect() : counter.disconnect();
    console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
  }
  console.log('Current User Count=', counter.count);  // counter.getCount()