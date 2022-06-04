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
  
 
  let i = 0;
  
setInterval(() => {
      
  if(i === amount){
  return }
  let step = firstDelay+stepDelay*i;
   createPromise(i+=1, step)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    
    
    }, 0);
})



function createPromise(position, delay) {
  
return new Promise ((Fulfilled, Rejected )=>
    {const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
      Fulfilled ({position, delay});
     
    } else {
    Rejected ({position, delay});
  }
  },delay)
     })
}



