let total = document.getElementById('total');
let calculate = document.getElementById('calculate');
let results = document.getElementById('results')


calculate.addEventListener('click', ()=>{
  let value = Number(total.value)
  let solution = nerdamer.solveEquations(['x+((x*15)/100)=y', 'y+((y*25)/100)=z', `x+y+z=${value}`]);
  console.log(solution);
  results.innerHTML = `
    <h3>Month 1: ${solution[0][1]}</h3>
    <h3>Month 2: ${solution[1][1]}</h3>
    <h3>Month 3: ${solution[2][1]}</h3>
  `
})
