function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(5);  // Output: Positive
checkNumber(-3); // Output: Negative
checkNumber(0);  // Output: Zero


function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

checkVotingEligibility(20); // Output: Eligible to vote
checkVotingEligibility(16); // Output: Not eligible to vote


function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a + " is the largest");
    } else if (b >= a && b >= c) {
        console.log(b + " is the largest");
    } else {
        console.log(c + " is the largest");
    }
}

findLargest(3, 5, 1); // Output: 5 is the largest
findLargest(7, 2, 7); // Output: 7 is the largest


//Task 4: Determine the day of the week based on a number (1-7) 

function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
    }
}
getDayOfWeek(1); // Output: Sunday
getDayOfWeek(4); // Output: Wednesday


// Task 5: Assign a grade based on a score
function getGrade(score) {
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
getGrade(90); // Output: A


// Task 6: Check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOdd(5); // Output: Odd
checkEvenOdd(6); // Output: Even


// Task 7: Check if a year is a leap year
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}


