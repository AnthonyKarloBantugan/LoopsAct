console.log('Hello World');

// lets create a function that will count to a series of number depending on the input of the user

// get the value of the input field. in order to get the value of the input, using a dot(.) notation call out it's value property.
// 

// THERE ARE 5 WAYS yo select elements (5 DOM selectors)
    // 1. getElementByTagName() //collective through the use of the element/tag name

    // 2. getElementByClassName() // collective/multiple through the use of their class attributes.

    // 3.getElementById() //select a distinct/specific through the use of its ID attribute.

    // 4.querySelector() //neutral/versatile selection

    // 5.querySelectorAll() //collective approach when selecting multiple components/elements at once.

function countUsingWhile() {
    let input1 = document.getElementById('task1').value;
    
    if (input1 <= 0) {
        // NOT VALID
        // inform the user the the input is not valid.
        // innerHTML property.
        let msg = document.getElementById('message');
        msg.innerHTML = 'Value Not Valid!';
    }else {
        // VALID
        while (input1 !== 0) {
        // what will happen if the condition has not/been met.
        alert(input1);
        input1-- //decrease the value of the input by 1 iteration of the loop.
        }
    }
}
// ================================================

// lets create a function that will count to a series of number depending on the vallue inserted by the user
function countUsingDoWhile() {
    // get the input of the user.
    let number = document.getElementById('task2').value;
    // we have to make sure that the value is valid(we wont be accepting any value that are <= 0)
    if (number <= 0) {
        // the value is NOT VALID.
        // inform the user that he/she cannot proceed.
        let displayText = document.getElementById('info');
        displayText.innerHTML = 'The number is Not Valid!';
    } else {
        // PROCEED because the value in VALID.
        // syntax: 
        // do {
        //     // body of the loop
        // } while (condition){
        // }
        // task: will be to count from 1 to n (depending on the value inserted by the user.) 
        let indexStart = 1
        let displayText =  document.getElementById('info');
           displayText.innerHTML = number + ' is Valid';
        do {
            // the lock of code identified here will be executed first.
            alert('count value:' + indexStart); //for us to display the changes in the calue of the indexStart Variable.
           indexStart++ //a value of 1 was added because the value was incremented
        } while (indexStart <= number) {

        }
    }
}
// =================================================


// FOR LOOP
// syntax: for (initialization; expression/condition; finalExpression) {
    // statement of procedures
// }

// TASK: count to a series number depending on the value inserted by the user.
function countUsingForLoop() {
    // get the input from the user first using DOM selector.
    let data = document.getElementById('task3').value;

    let res = document.getElementById('response');
    // validate if the value of the data is what we desire.
    if (data <= 0) {
        // notify the user
        res.innerHTML = 'Input Invalid';
    } else {
        // initialization; condition; iteration/finalExp
        for (let startCount = 0; startCount <= data; startCount++) {
          // since the start of the count started with 0 then for every iteration we should add a value of 1 to eventually meet the condition and terminate its process
        // describe what will happen per iteration
        alert('This is the value in this iteration ' + startCount);  
        }
    }
}
// =================================================

// How to access elements of a string using repetition control structures.
// ====================================

// get the input of the user

function accessElementsInString() {
    // get the input of the user using DOM selectors
    let name = document.getElementById('userName').value;
    // alert(typeof name); //this is just a checker
    let textLength = document.getElementById('stringLength');

    // validate and make sure that input is NOT equivalent to blank
    if (name !== '') {
        // response if true

        // analyze the value that will be inserted by the user
            // 1.determine the length of the string.
                // => invoke the "length" property of a string using (.) notation.
        textLength.innerHTML = 'The string is ' + name.length + ' characters long.';

        // Upon accessing elements inside a string, this can be done so, using [] square brackets.
        // keep on mind we can access each element through the use of its index number/count
        // the count will start from 0 (first character inside the string corresponds to the number 0), the next is 1 and up to the "nth" number.
            // console.log(name[0]);
            // console.log(name[1]);
            // console.log(name[2]);
            // console.log(name[3]);
            // console.log(name[4]);
            // console.log(name[5]);
            // console.log(name[6]);
        // we will now use the concept of loops in order to produce a much more flexible response for the user's input
        for (let startIndex = 0; startIndex < name.length; startIndex++) {
            // access each element and display it inside the console
            alert(name[startIndex]);    
        }
    } else {
        //response if false
        alert('value is invalid');
    }
}
// =================================================

// how to access elements of string? [value/index]
// 0 1 2 nth
// K a hit ano

// Behavior: If the string provided is an odd number, the middle character does not need to be checked.
    // d a d //palindrome
    // k a y a k //palindrome
// we will create a loop through half of the string's character that checks if the letters at the front and at the back of the string are the same.


// Detect if the word is a palindrome.
function detectPalindrome() {
    //1. get input using DOM selectors
   let word =  document.getElementById('word').value;
   let response = document.getElementById('detectPalindrome');
   //2. validate the data if it is indeed the the correct type of info. 
    // alert(word);

    if (word !== '') {
        // identify how long the word is.
        let wrdLength = word.length;
        console.log(wrdLength);
        // initalization => identify the starting point of the loop.
        // condition => describes how the loop will progress and terminates.
        // iteration -> how to advance to the next process.
        for (let index = 0; index < wrdLength / 2; index++) {
            // instruction that will upon each iteration of the loop.
            // we are trying to get the current element in the string according to the index count
            // get the last element of the string by deducting 1 in the current legth of the string since the index count of each element inside a string starts with 0.
            if (word[index] !== word[wrdLength - 1 - index]) {
                //response
                response.innerHTML = word + '<h3 class="text-secondary"> is Not a Palindrome</h3>'; 
            } else {
                console.log(word[index] + ' is the same as ' + word[wrdLength - 1 - index]);
                response.innerHTML = word + '<h3 class="text-success"> is a Palindrome</h3>';
            }
        }
        
    } else {
        // response
       response.innerHTML = '<h3 class="text-danger">Value is Invalid</h3>';
    }
}