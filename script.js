const high = Number(prompt("PLease enter your weekly goal(miles): "))
const goal = document.getElementById('weeklyTotal').innerText = high

let entries = [] //Array to store all the miles entered between 7 days

const entriesWrapper = document.getElementById('entries')

const addNewEntry = newEntry => {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    //Create a new list Item
    const listItem = document.createElement('li') //create List Elements
    const listValue = document.createTextNode(newEntry.toFixed(1)) //Store the entered entry in the variable
    listItem.appendChild(listValue) //Adding the listValue to the listValue by appending it
    entriesWrapper.appendChild(listItem)
}

const reducer = (sum, currentValue) => sum + currentValue

//Calculate the total entries
function sumTotal() {
    const initialValue = 0
    const totalSum = entries.reduce(reducer, initialValue).toFixed(1)
    document.getElementById('total').innerText = totalSum
    document.getElementById('progressTotal').innerText = totalSum
}

//Calculate the average of entries
const calAverage = () => {
    initialAverage = 0
    const average = (entries.reduce(reducer, initialAverage) / entries.length).toFixed(1)
    document.getElementById('average').innerHTML = average
}

//Find the highest mile in the entries
const weeklyHigh = () => {
    const high = Math.max(...entries).toFixed(1)
    document.getElementById('weeksHigh').innerText = high
}

//Updates the progress circle
const calGoal = () => {
    const totalSum = entries.reduce(reducer).toFixed(1)
    const progressPercent = totalSum / (goal / 100)
    const progressCircle = document.getElementById('progressCircle')
    if (progressPercent > 100) progressPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 {progressPercent}%, #2d3740 {progressPercent}% 100%)`
}


const handleSubmit = event => {
    event.preventDefault() //prevent the browser from refreshing when the form as been submitted
    const entry = Number(document.getElementById('milesEntered').value)
    if (!entry) return;
    document.querySelector('form').reset() //clear the form after submitting
    entries.push(entry)
    addNewEntry(entry)
    sumTotal()
    calAverage()
    weeklyHigh()
    calGoal()
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit)