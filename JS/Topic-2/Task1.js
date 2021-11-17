// Create a function runningAverage() that returns a callable function object:
// // Example how it should work:
// runningAverage(10); //Outputs 10.0
// runningAverage(11); //Outputs 10.5
// runningAverage(12); //Outputs 11


let arr = [];
let sum;
function runningAverage(num) {
    arr.push(num);
    console.log(arr);
    sum = arr.reduce((sum, current) => sum + current);
    console.log(sum);
    return sum/arr.length
}

console.log(runningAverage(5))
console.log(runningAverage(10))
console.log(runningAverage(100))
