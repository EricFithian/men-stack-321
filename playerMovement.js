function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    let thing = add(num1, num2);
    num1 = thing
    return num1 - num2;
}


// console.log(add(4, 2));
// console.log(subtract(4, 2));

module.exports = {
    subtract: subtract
    // subtract: subtract
}
// console.log(module);