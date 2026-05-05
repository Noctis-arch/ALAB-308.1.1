// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;  //false

                 //false.   //flase.    //false.    //false

const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

                    





// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isNotOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Check if all numbers are divisible by 5 
console.log("Are all the numbers divisible by 5?");
console.log( (n1%5)==0 && (n2%5)==0 &&  (n3%5)==0 && (n4%5)==0);

//Check if the first number is larger than the last 
console.log("Is the first number bigger than the last?")
console.log(n1>n4);

//Arithmetic Chain
console.log("Areithemic Chain Results");
console.log(((n2-n1)*n3)%n4);

let x = true;
console.log(!x);

console.log("Change the way that isOver25 calculates. After we change the way it calculates we got the result:")
console.log(isNotOver25);


console.log("Part 2");
let totalMiles = 1500;
let fuelBudget = 175;
let avgerageCost = 3;

let mpg55 = 30;
let mpg60 = 28;
let mpg75 = 23;

//If we're going 55mph we get 30 miles per gallon
console.log("If we're going 55 mph, we will need: "+ totalMiles/mpg55+ "gallons")

//If we're going 60mph we get 28 miles per gallon
console.log("If we're going 60 mph, we will need: "+ totalMiles/mpg60+ " gallons")

//If we're going 75mph we get 23 miles per gallon
console.log("If we're going 75 mph, we will need: "+ totalMiles/mpg75+ " gallons")


console.log("Part 3");


// Function to calculate gallons needed
function calculateGallons(miles, mpg) {
  return miles / mpg;
}

// Function to calculate fuel cost
function calculateCost(gallons, costPerGallon) {
  return gallons * costPerGallon;
}

// Function to analyze a speed option
function analyzeSpeed(speed, mpg) {
  let gallons = calculateGallons(totalMiles, mpg);
  let cost = calculateCost(gallons, avgerageCost);
  let hours = totalMiles / speed;

  console.log(`\n--- ${speed} MPH ---`);
  console.log(`Gallons needed: ${gallons}`);
  console.log(`Cost: $${cost}`);
  console.log(`Time: ${hours} hours`);

  // Control flow (decision making)
  if (cost <= fuelBudget) {
    console.log("Within budget");
  } else {
    console.log("Over budget");
  }
}

// Run analysis for each speed
analyzeSpeed(55, mpg55);
analyzeSpeed(60, mpg60);
analyzeSpeed(75, mpg75);