// Use Conditional Logic With If Statements 

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was fasle";
}

// console.log(trueOrFalse(true))

// Comparison with the Equality  Operator

function testEqual(val) {
    if (val == 12) { // here ==(Equality Operator) it will compare 12
        return "Equal";
    }
    return "Not Equal";
}

// console.log(testEqual(10))

// Comparison with the Strict Equality Operator

function testStrict(val) {
    if (val === 7) { // here ===(Strict Equality Operator)
        return "Equal"; 
    }
    return "Not Equal";
}

// console.log(testStrict('7'))

// Practice Comparing Different Values

function compareEquality(a, b) {
    if (a === b) {
        return "Equal"
    }
    return "Not Equal"
}

// console.log(compareEquality(10,"10"))

// Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) { // here !=(Inequality Operator)
        return " Not Equal"
    }
    return "Equal"
}
// console.log(testNotEqual(10))

// Comparison with the  Strict inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) { // here !==(Strict inequality Operator)
        return "Not Eqaul"
    }
    return "Equal"
}

// console.log(testStrictNotEqual(10))

//Comparisons with the Logical And Operator

function testGreaterThan(val) {
    if (val > 100) { // here >(Greater Than)
        return "Over 100"
    }
    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under"
}

// console.log(testGreaterThan(7))

// Comparison with the Greater Than or Equal To Operator

function testGreaterThanOrEqual(val) {
    if (val >= 100) { // here =>(Greater Than Or Equal)
        return "Over 100"
    }
    if (val >= 10) {
        return "Over 10";
    }

    return "Less than 10"
}

// console.log(testGreaterThanOrEqual(7))


// Comparison with the Less Than Operator


function testLessThan(val) {
    if (val < 25) { // here >(Less Than)
        return "Under 25"
    }
    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over"
}

// console.log(testLessThan(7))

// Comparison with the Less Than or Equal To Operator

function testLessThanOrEqual(val) {
    if (val <= 12) { // here =>(Less Than or Equal To)
        return "Smaller Than or Equal to 12"
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More than 24"
}
// console.log(testLessThanOrEqual(10))

// Comparisons with the Logical And(&&) Operator

function testLogicalAnd(val) { // here we are comparing values at the same time
    if (val <= 50 && val >= 25) { // here &&(means And) This is "And" Operator
        
            return "Yes";
       
    }

    return "No";
}

// console.log(testLogicalAnd(10))


// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) { // here ||(means Or Operator)
        return "Outside";
    }
    return "Inside";
}
// console.log(testLogicalOr(15))


// Else Statements

 function testElse(val) {
     var result = "";
     if (val > 5) {
         result = "Bigger than 5"
     } else {
         result = "5 or smaller"
     }

     return result
 }

//  console.log(testElse(6))

// Else If Statements

function testElseIf(val) {
    if (val > 10) {
        return " Greater than 10"
    } else  if (val < 5) {
        return "Smaller than 5"
    } else{
        return "Betweem 5 and 10"
    }
}

// console.log(testElseIf(7))


// Logical Oder in If Else Statements

function orderMyLogic(val) {
    if (val > 5) {
        return " Greater than 5"
    } else  if (val < 10) {
        return "Smaller than 10"
    } else{
        return "Betweem 5 and 10"
    }
}

// console.log(orderMyLogic(7))

// Chaining IF Else Statements

/**
 * Write chained if/else if statements to fulfill the following conditions:
 * num < 5 - return "Tiny"
 * num < 10 - return "Small"
 * num < 15 - return "Medium"
 * num < 20 - return "Large"
 * num >= 20 - return "Huge"
 * **/


function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if(num < 10){
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20){
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(66))