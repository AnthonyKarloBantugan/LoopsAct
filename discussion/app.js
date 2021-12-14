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
        msg.innerHTML = 'Value Not Valid';
    }else {
        // VALID
        while (input1 !== 0) {
        // what will happen if the condition has not/been met.
        alert(input1);
        input1-- //decrease the value of the input by 1 iteration of the loop.
        }
    }
}

