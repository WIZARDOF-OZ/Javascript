//Q. What is a switch statement?
//Ans= A switch statement tests a value and can have many case statements which define various possible values.

//Q. What is break?
//Ans = Break means that we are at the end of the case statement. And once we break it, it just goes to the end of the switch statement and doesn't evaluate anything else in the switch statement.

/**
 * Write a switch statement which tests val and sets answer for the following conditions:'
 * 1 - "alpha"
 * 2 - "beta"
 * 3 - "gamma"
 * 4 - "delta"
 */

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: 
        answer = "alpha";
            
            break;

        case 2: 
        answer = "beta";
       break;
        case 3 :
            answer = "Gamma"
           break; 
            case 4 : 
            answer = "delta"
    
    break;
    }
    return answer
}


// console.log(caseInSwitch(1))

// Default Option in Switch Statements

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
    case "b": answer = "bird"
    break;
    case "c": answer = "cat";
    break;
        default:
            answer = "stuff"
            break;
    }
    return answer
}
console.log(switchOfStuff(4))


