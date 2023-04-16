///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal = cartTotal + cartTotal * tax - couponValue;
}
console.log(calcFinalPrice(summedPrice, 5, .06));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    /////PROPERTIES OF CUSTOMER OBJECT/////
    NAME -> Restaurant should have the name of the customer, data type - STRING, because name is a sequence of characters;
    ADDRESS -> Needed for possible delivery, data type - STRING, because adress consists of multiple characters, including letters and numbers, combined you can think of it as a text;
    ZIP_CODE -> To determine if delivery zone covers customer's address, data type - NUMBER, because it only includes numbers;
    PHONE -> To reach the customer, data type - NUMBER, because it only includes numbers;
    PAYMENT_INFO -> To process payment, data type - STRING, because for my example I consider that the payment method is either `cash` or `card`, otherwise if we need to store the credit card number in this property - we would need number as data type;
    ORDER -> To show items picked by the customer, data type - ARRAY OF STRINGS, because it can be series of the items, each represented by a word or mulriple words;
    PRICE -> Total price of the order, data type - NUMBER, because it's numeric value, could've been array of numbers if it storred prices of each ordered item separately;
    TAX_PERCENT -> Percentage of taxes that'll be added to the total price, data type - NUMBER, because it's numeric value;
    TIP_PERCENT -> Percentage of tip that'll be added to the final price, data type - NUMBER, because it's numeric value;
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: `Katya Daron`,
    address: `1 Wall St, New York, NY`,
    zipCode: 11214,
    phone: 1234445566,
    payment_method: `card`,
    order: [`New York Omelette`, `coffee`, `muffin`],
    price: 22.09,
    tax_percent: .08,
    tip_percent: .18,
}
console.log(customer);