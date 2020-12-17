const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const l5 = document.querySelector('.l5');
const l6 = document.querySelector('.l6');
const l7 = document.querySelector('.l7');

let n = 1;
let removeX = (e)=> { // 捕获, 从外到内
  const t = e.currentTarget; // 用户当前操作的元素
  setTimeout(()=> {
    t.classList.remove('x');
  }, n * 1000);
  n += 1;
};

let addX = (e)=> { // 冒泡, 从内到外
  const t = e.currentTarget;
  setTimeout(()=> {
    t.classList.add('x');
  }, n * 1000);
  n += 1;
}

l1.addEventListener('click', removeX, true); // 捕获
l1.addEventListener('click', addX); // 冒泡

l2.addEventListener('click', removeX, true);
l2.addEventListener('click', addX);

l3.addEventListener('click', removeX, true);
l3.addEventListener('click', addX);

l4.addEventListener('click', removeX, true);
l4.addEventListener('click', (e)=>{e.stopPropagation()},addX); // 取消冒泡

l5.addEventListener('click', removeX, true);
l5.addEventListener('click', addX);

l6.addEventListener('click', removeX, true);
l6.addEventListener('click', addX);

l7.addEventListener('click', removeX, true);
l7.addEventListener('click', addX);

// // 特例 只有一个div被监听(不考虑父子), 谁先监听谁先执行
// l7.addEventListener('click', ()=>{console.log(2);}); // 冒泡
// l7.addEventListener('click', ()=>{console.log(1);}, true); // 捕获

