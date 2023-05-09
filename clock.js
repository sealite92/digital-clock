


// const data = [
//   locale : 'en-NG',
//   currency : 'NGN'
// ]

const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();


  const h = `${now.getHours()}`.padStart(2, 0)
  const m = `${now.getMinutes()}`.padStart(2, 0)
  const s = `${now.getSeconds()}`.padStart(2, 0)

  let html = `
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>  
  `;
 
clock.innerHTML= html


};

setInterval(tick, 1000);


