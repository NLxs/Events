let button1 = document.querySelector('#button1');
button1.addEventListener('click', ()=> {
  const event = new CustomEvent('诺鲁', {
    detail: {name: '诺鲁', age: 23},
    bubbles: true,
    cancelable: false
  });
  button1.dispatchEvent(event); // dispatchEvent 指定一个事件
});

div1.addEventListener('诺鲁', (e)=> {
  console.log('诺鲁 事件触发了');
  console.log(e.detail);
});