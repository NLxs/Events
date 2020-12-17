setTimeout(()=> {
  const button = document.createElement('button');
  button.textContent = 'button2';
  div1.appendChild(button);
}, 1000); // 1s后在div1中添加一个新的button

// 封装一个委托事件
function on(eventType, element, selector, fn) {
  if(!(element instanceof Element)) {
    element = document.querySelector(element);
  }
  element.addEventListener(eventType, (e)=> {
    const t = e.target;
    if(t.matches(selector)) { // matches判断当前元素是否满足已有的标签
      fn(e);
    };
  });
};

// 调用事件委托
on('click', '#div1', 'button', ()=> {
  console.log('button 被点击了');
})


let div1 = document.querySelector('#div1');
div1.addEventListener('click', (e)=> {
  const t = e.target;
  if(t.tagName.toLowerCase() === 'button') {
    console.log('button 被点击了');
    console.log(t.textContent);
    console.log(t.dataset.id);
  };
});

// 拓展 通过寻找父元素来完成事件，body是底线
function on(eventType, element, selector, fn) {
  if (!(element instanceof Element)) {
      element = document.querySelectorAll(element)
  }

  element.addEventListener(eventType, (e)=>{
      let target = e.target
      // 如果匹配到了selector就跳出循环
      while(!target.matches(selector)){
          if (target === element){
              //已经找到了父元素，说明还没找到，就设置为null
              target = null
              break
          }
          target = target.parentNode
      }
    
      // 找到了target, 就调用函数
      target && fn.call(target, e)
      
  })
}