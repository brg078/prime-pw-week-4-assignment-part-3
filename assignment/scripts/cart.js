console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//- Create a global variable named `basket` and set it to an empty array.
//
let basket = [];
//
// DONE

//- Create a function called `addItem`. It should:
//- take an input parameter for a string `item`
//- add the new item to the global array `basket`. 
//- return `true` indicating the item was added
//
function addItem(item) {
    basket.push(item);
    console.log('Added', item, 'True');
    return true;
}
addItem('bread');
addItem('milk');
addItem('corn');
console.log(basket);
//
//DONE

//- Create a function called `listItems`. It should:
//- loop over the items in the `basket` array
//- console.log each individual item on a new line
//
function listItems (list) {
    for (i=0; i<list.length; i++) {
        console.log(list[i]);
    }
}
//
// DONE

//- Create a function called `empty`. It should: DONE
//  - reset the `basket` to an empty array
//
function emptyBasket(basket) {
    basket = [];
    console.log('basket emptied');
}
emptyBasket(basket);
console.log(basket);
//
//DONE

//Add a global `const` named `maxItems` and set it to 5.
//
const maxItems = 5
//
//DONE

//Create a function called isFull(). It should:
//  - return `false` if the basket contains *less* than max number of items
//  - return `true` otherwise (equal or more than maxItems)
//
