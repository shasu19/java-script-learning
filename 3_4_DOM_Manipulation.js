// DOM Manupulation using DOM pig game

console.log(Math.random()); // 0 - 1 with decimal places

console.log(Math.random() * 6); // number 0 to 5 exclude 6

Math.floor(4.6); // result 4

// Create dice value
var dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// select some DOM element by class, query or by element ID
document.querySelector('#element_id'); // select element by ID

// consider values can be 0 or 1
var activePlayer = 0;
document.querySelector('#element_id_' + activePlayer);
// it will resolve into '#element_id_0' or '#element_id_1'

// update plain text
document.querySelector('#element_id_' + activePlayer).textContent = 'Test';

// update html text details
document.querySelector('#element_id_' + activePlayer)
    .innerHTML = '<em>' + dice + '</em>';

// read the value of text field
var readText = document.querySelector('#element_id_' + activePlayer).textContent;
console.log(readText);

// select .class element
document.querySelector('.element_by_class_name').innerHTML = 'Got the element';

// change css property of element
// hide the element
document.querySelector('.element_by_class_name').style.display = 'none';

////////////////////////
// Event handling
// consider there is one button element with class .btn_roll_dice
// all events list can be googled and used as per need

function onDiceRoll() {
    console.log('Dice is rolled');
}

// calling normal way function
onDiceRoll();

document.querySelector('.btn_roll_dice')
    .addEventListener('click', onDiceRoll);
// here we have to just pass the function name

// passing anonymous function
document.querySelector('.btn_roll_dice')
    .addEventListener('click', function () {
        console.log('Anonymous function called');
    });

// enable or display hidden element
document.getElementById('elementId').style.display = 'block';

// changing image to display and displaying correct dice image
var diceRolledUp = document.getElementById('dice-element');
diceRolledUp.style.display = 'block';
diceRolledUp.src = 'dice-image-' + dice + '.png';

////////////////////////////////////////////////////////////////


// Adding some class to element or remove or toggle
document.getElementById('element-t0-select').classList.remove('active');
document.getElementById('element-t0-select').classList.add('active');
document.getElementById('element-t0-select').classList.toggle('active');

////////////////////////////////////////////////////////////////////



















