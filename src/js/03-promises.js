
const FORM = document.querySelector('.form')
const AMOUNT = FORM.querySelector('[name = amount]')
const DELAY = FORM.querySelector('[name = delay]')
const STEP = FORM.querySelector('[name = step]')


FORM.addEventListener('submit',(e)=>{
e.preventDefault();
  const amount = Number(AMOUNT.value);
  let stepDelay = Number(STEP.value);
  let firstDelay = Number(DELAY.value);
  
  
  let x = 0;
setInterval(() => {
     
  if(x === amount){
  return }

   createPromise(x+=1, firstDelay+=stepDelay)
    .then(({ position, delay }) => {
      
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      
    })
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    
    }, firstDelay + stepDelay);
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



