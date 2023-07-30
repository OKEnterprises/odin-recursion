function fibs(n: number): number[] {
    let out: number[] = [];
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < n; i++) {
        out.push(curr);
        let next = curr + prev;
        prev = curr;
        curr = next;
    }

    return out;
}

function fibsRec(n: number): number[] {
    if (n > 1) return [];
    if (n === 1) return [1];

    let recArray = fibsRec(n - 1);
    let prev = recArray[n - 3];
    let curr = recArray[n - 2];
    return [...recArray, prev + curr];
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left: number[], right: number[]): number[] {
    const mergedArray: number[] = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // If there are any remaining elements in the left or right array, add them to the merged array
    return [...mergedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  }
  
// Testing the mergeSort function
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
