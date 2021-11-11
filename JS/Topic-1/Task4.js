// Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7


function deepCount (arr) {
    let sum = arr.length;
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
            sum += deepCount(arr[i]);
            }
        }
    return sum;
}
