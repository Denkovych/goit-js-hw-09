const btnStart = document.querySelector('button[data-start]');
console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);

btnStart.addEventListener('click', ()=>{
    intId =  setInterval(()=>{
    document.body.style.backgroundColor = getRandomHexColor();
    } , 1000)
    btnStart.disabled = true;
    btnStop.disabled =false;
});
btnStop.addEventListener('click', ()=>{
    clearInterval(intId); 
    btnStart.disabled = false; 
    btnStop.disabled =true; 
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

