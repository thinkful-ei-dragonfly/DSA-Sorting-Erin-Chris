//Question One
//A: The first pair was created e.g. ([ 21, 1 ])
//B: [ 1, 2, 9, 21, 26, 28, 29, 45, 16, 49, 39, 27, 43, 34, 46, 40 ]
//C:[ 1, 21, 26, 45 ]
//D:[ 1, 2, 9, 21, 26, 28, 29, 45 ] AND [ 16, 27, 34, 39, 40, 43, 46, 49 ]
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    console.log(array)
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    console.log(array)
    return array;
};

let testArray = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
function main() {
    console.log(mergeSort(testArray))
}

//QUESTION Two
    //PART ONE:
    // The pivot could have been 17, but could not have been 14
    //False, everything to the left of 14 is lesser and everything to its right is larger
    // The pivot could have been either 14 or 17
    //True, the pivot can be any number in a  list, and in this case both follow the above rule
    // Neither 14 nor 17 could have been the pivot
    //False, refer above.
    // The pivot could have been 14, but could not have been 17
    //False, everything to the left of 17 is less and to the right is larger

    //PART TWO: 
    //[ 3, 10, 9, 12, 19, 14, 17, 16, 13, 15 ]
    //

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log(array)
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// function partition(array, start, end) {
//     const pivot = array[end - 1];
//     let j = start;
//     for (let i = start; i < end - 1; i++) {
//         if (array[i] <= pivot) {
//             swap(array, i, j);
//             j++;
//         }
//     }
//     console.log(array, end - 1, j)
//     swap(array, end - 1, j);
//     return j;
// };

function partition(array, start, end) {
    const pivot = array[0];
    let j = end;
    for (let i = end; i > start - 1; i--) {
        if (array[i] >= pivot) {
            swap(array, i, j);
            j--;
        }
    }
    console.log(array, start + 1, j)
    swap(array, start + 1, j);
    return j;
};
function main() {
    console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ]));
}

//14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//j 
//10, 17, 13, 15, 19, 14, 3, 16, 9, 12
//      j
//10, 3, 13, 15, 19, 14, 17, 16, 9, 12
//10, 3, 9, 12, 19, 14, 17, 16, 13, 15
//10,3,9,12 AND 19, 14, 17, 16, 13, 15
//10,3,9,[12]

main();