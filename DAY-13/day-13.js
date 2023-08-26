
//JavaScript algorithm that accepts an array of numbers as input and presents the sorted array to the user

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length -2; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
  return arr;  
}
// Function to present the sorted array
function presentSortedArray(sortedArray) {
    console.log("Sorted array:", sortedArray);
}

// Example usage
let numbers1 = [13, 10, 20, 16,11];
selectionSort(numbers1);
presentSortedArray(numbers1);
//2
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// Function to present the sorted array
function presentSortedArray(sortedArray) {
    console.log("Sorted array:", sortedArray);
}

// Example usage
let numbers2 = [12, 23, 11, 22, 19];
bubbleSort(numbers2);
presentSortedArray(numbers2);

// JavaScript algorithm that accepts an array of numbers as input and presents the sorted array to the user,
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}

//linearSearch
let numbers3 =prompt('enter your number').split(',') 
let targetElement = 22;
let position = linearSearch(numbers3, targetElement);
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target element is found
        }
    }
    return -1; // Return -1 if the target element is not found
}

//
if (position !== -1) {
    console.log(`The element ${targetElement} is found at position ${position}.`);
} else {
    console.log(`The element ${targetElement} is not found in the array.`);
}


//matrix
function countZeros(matrix) {
    let zeroCount = 0;

    for (let row of matrix) {
        for (let num of row) {
            if (num === 0) {
                zeroCount++;
            }
        }
    }

    return zeroCount;
}
const matrix = [
    [0, 1, 0, 3],
    [4, 0, 0, 7],
    [0, 9, 0, 0]
];

const result = countZeros(matrix);
console.log("Nombre de zéros :", result);