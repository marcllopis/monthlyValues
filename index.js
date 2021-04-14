let total = document.getElementById('total');
let calculate = document.getElementById('calculate');
let results = document.getElementById('results')


calculate.addEventListener('click', ()=>{
  let value = Number(total.value)
  let solution = nerdamer.solveEquations(['x+((x*15)/100)=y', 'y+((y*25)/100)=z', `x+y+z=${value}`]);
  results.innerHTML = `
    <h3>Month 1 -> <span>${Number(solution[0][1]).toFixed(2)} $</span></h3>
    <h3>Month 2 -> ${Number(solution[1][1]).toFixed(2)} $</h3>
    <h3>Month 3 -> ${Number(solution[2][1]).toFixed(2)} $</h3>
    <h3>Total this quarter is ${value} $</h3>
  `
})
