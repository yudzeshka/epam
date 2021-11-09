const arr = [1, 1, 2];
const arr2 = [17, 17, 3, 17, 17, 17, 17];


function getUniqueNumber (numbers) {
   numbers = numbers.sort((a,b) => a-b);
   numbers = numbers.slice(numbers[0]!==numbers[1] ? 0 : -1);
   return numbers[0]
;}

console.log(getUniqueNumber(arr));
console.log(getUniqueNumber(arr2))
