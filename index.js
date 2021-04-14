let total = document.getElementById('total');
let calculate = document.getElementById('calculate');
let results = document.getElementById('results')
let incr1 = document.getElementById('incr1')
let incr2 = document.getElementById('incr2')


calculate.addEventListener('click', ()=>{
  let value = Number(total.value)
  let increment1 = Number(incr1.value) || 15
  let increment2 = Number(incr2.value) || 25

  console.log(increment1, increment2)
  let solution = nerdamer.solveEquations([`x+((x*${increment1})/100)=y`, `y+((y*${increment2})/100)=z`, `x+y+z=${value}`]);
  results.innerHTML = `
    <h3>Month 1 -> <span>${Number(solution[0][1]).toFixed(2)} $</span></h3>
    <h3>Month 2 -> ${Number(solution[1][1]).toFixed(2)} $</h3>
    <h3>Month 3 -> ${Number(solution[2][1]).toFixed(2)} $</h3>
    <h3>Total this quarter is ${value} $</h3>
  `
})
