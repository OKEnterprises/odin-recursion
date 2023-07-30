var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function fibs(n) {
    var out = [];
    var prev = 0;
    var curr = 1;
    for (var i = 0; i < n; i++) {
        out.push(curr);
        var next = curr + prev;
        prev = curr;
        curr = next;
    }
    return out;
}
function fibsRec(n) {
    if (n > 1)
        return [];
    if (n === 1)
        return [1];
    var recArray = fibsRec(n - 1);
    var prev = recArray[n - 3];
    var curr = recArray[n - 2];
    return __spreadArray(__spreadArray([], recArray, true), [prev + curr], false);
}
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    var leftSorted = mergeSort(left);
    var rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}
function merge(left, right) {
    var mergedArray = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // If there are any remaining elements in the left or right array, add them to the merged array
    return __spreadArray(__spreadArray(__spreadArray([], mergedArray, true), left.slice(leftIndex), true), right.slice(rightIndex), true);
}
// Testing the mergeSort function
var unsortedArray = [38, 27, 43, 3, 9, 82, 10];
var sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
