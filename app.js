let i = 0

function roll() {

let numberOfDice = document.getElementById('number-of-dice-input').value 
let dieSize = document.getElementById('die-size-input').value
let modifier = document.getElementById('modifier-input').value
numberOfDice = Number(numberOfDice) 
modifier = Number(modifier)
let result = 0
let diesSizeNum = 0


// Logic is wrong, needs to make random number for each die rolled
if (dieSize === 'D20') {
    dieSizeNum = 20
} else if (dieSize === 'D12') {
    dieSizeNum = 12
} else if (dieSize === 'D10') {
    dieSizeNum = 10
} else if (dieSize === 'D8') {
    dieSizeNum = 8
} else if (dieSize === 'D6') {
    dieSizeNum = 6
} else if (dieSize === 'D4') {
    dieSizeNum = 4
}

console.log(numberOfDice)
console.log(dieSize)
console.log(dieSizeNum)
console.log(modifier)

for (let i = 0; i < numberOfDice; i++) {
    let random = (Math.random())
    result += Math.ceil((random * dieSizeNum))
}
    result += modifier


    console.log('result = ' + result)
    addRollToTable(numberOfDice, dieSize, modifier, result)
    displayRoll(result)
}

function addRollToTable(numberOfDice, dieSize, modifier, result) {
    if (i == 0) {
        document.getElementById('table').deleteRow(1)
        i++ 
    }
    
    let table = document.getElementById('table').insertRow(1)
    let cellNumberOfDice = table.insertCell(0)
    let cellDieSize = table.insertCell(1)
    let cellModifier = table.insertCell(2)
    let cellResult = table.insertCell(3)
    
    cellNumberOfDice.innerText = numberOfDice
    cellDieSize.innerText = dieSize
    if (modifier >= 0) {cellModifier.innerText = '+' + modifier} 
    else {cellModifier.innerText = modifier }
    cellResult.innerText = result
    
    cellNumberOfDice.classList.add('table-item')
    cellDieSize.classList.add('table-item')
    cellModifier.classList.add('table-item')
    cellResult.classList.add('table-item')
    
    if (document.getElementById('table').rows.length > 21) {
        document.getElementById('table').deleteRow(21)   
    }

}

function displayRoll(result) {
    let p = document.getElementById('result')
    p.innerText = result
}

document.addEventListener('DOMContentLoaded', () => {

    const a = document.getElementById('roll')
    a.addEventListener('click', roll)

})
