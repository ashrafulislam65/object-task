// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

let keys = Object.keys(myObject);
let values = Object.values(myObject);
//console.log(keys);
// console.log(values);
for(i=0;i<keys.length;i++)
{
    
    console.log('key:'+' '+keys[i]+' '+'|'+' '+'type:'+' '+typeof(values[i]));
    
}



// Output:


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean