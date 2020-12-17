let x = document.querySelector('#x');
x.addEventListener('wheel',(e)=>{e.preventDefault()});//pc端
x.addEventListener('touchstart',(e)=>{e.preventDefault()})//移动端