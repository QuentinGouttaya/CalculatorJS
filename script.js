
// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billTotalInputDiv = document.getElementById('billTotalInput')
let tipInputDiv = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')








// Get number of people from number of people div
let numberOfPeople = numberOfPeopleDiv.innerText

// ** Calculate the total bill per person **
const calculateBill = () => { }
// get bill from user input & convert it into a number
const billTotalInput = Number(billTotalInputDiv.value)

// get the tip from user & convert it into a percentage (divide by 100)
const tipInput = Number(tipInputDiv.value) / 100

// get the total tip amount
const tipTotal = billTotalInput * tipInput


// calculate the total (tip amount + bill)
let billTotal = billTotalInput - tipTotal


// calculate the per person total (total divided by number of people)
let perPersonTotal = billTotal / numberOfPeopleDiv.innerText


// update the perPersonTotal on DOM & show it to user
perPersonTotalDiv.innerText = '$' + perPersonTotal
return

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  let numberOfPeople = Number(numberOfPeopleDiv.innerText)
  numberOfPeople++

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = Number(numberOfPeople)

  // calculate the bill based on the new number of people
  let perPersonTotal = (billTotalInputDiv.value - (tipInputDiv.value / 100 * billTotalInputDiv.value)) / Number(numberOfPeople)
  perPersonTotalDiv.innerText = '$' + parseFloat(perPersonTotal).toFixed(2);
  parseFloat(perPersonTotal).toFixed(2);

  return







}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeopleDiv.innerText <= 1) {
    return
  }



  // decrement the amount of people
  let numberOfPeople = numberOfPeopleDiv.innerText
  numberOfPeople--


  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = Number(numberOfPeople)


  // calculate the bill based on the new number of people
  let perPersonTotal = (billTotalInputDiv.value - (tipInputDiv.value / 100 * billTotalInputDiv.value)) / Number(numberOfPeople)
  perPersonTotalDiv.innerText = '$' + parseFloat(perPersonTotal).toFixed(2);


}
* /

//Get Access to divs
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

  const bill = Number(billInput.value)
  const tipPercentage = Number(tipPercentage.value / 100)
  const tipAmount = bill * tipPercentage
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {

  if (numberOfPeople <= 1) {
    return
  }

  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}