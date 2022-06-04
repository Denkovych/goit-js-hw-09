import { Notify } from 'notiflix/build/notiflix-notify-aio';
const FORM = document.querySelector('.form')
const AMOUNT = FORM.querySelector('[name = amount]')
const DELAY = FORM.querySelector('[name = delay]')
const STEP = FORM.querySelector('[name = step]')


FORM.addEventListener('submit',(e)=>{
e.preventDefault();
  const amount = Number(AMOUNT.value);
  let stepDelay = Number(STEP.value);
  let firstDelay = Number(DELAY.value);
  
  let c = 0;
  let x = 0;
  let step = firstDelay+stepDelay*c;
setInterval(() => {
      
  if(x === amount){
  return }
  let step = firstDelay+stepDelay*c;
   createPromise(x+=1, step)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    c+=1;
    
    }, step);
})



function createPromise(position, delay) {
  
return new Promise ((Fulfilled, Rejected )=>
    {const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      Fulfilled ({position, delay});
     
    } else {
    Rejected ({position, delay});
  } })
}



