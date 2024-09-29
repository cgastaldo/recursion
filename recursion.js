function fibs(number){
    if (number == 0) return [];
    if (number == 1) return [0];
    else if (number == 2) return [0,1];
    else{
        let fibArray = [0,1];
        for (let i=0; i<number-2; i++){
            fibArray = fibArray.concat(fibArray.at(-1)+fibArray.at(-2)); 
        }
        return fibArray;
    }
}

function fibsRec(number){
    if (number == 0) return [];
    else if (number == 1) return [0];
    else if (number == 2) return [0,1];
    else {
        let fibArray = fibsRec(number - 1);
        fibArray.push(fibArray[fibArray.length-1] +fibArray[fibArray.length-2]);
        return fibArray;
    }
}

console.log(fibs(8), fibsRec(8));

function mergeSort(unsortedArray){
    const half = unsortedArray.length / 2;

    if (unsortedArray.length < 2){
        return unsortedArray;
    }

    const left = unsortedArray.splice(0, half);
    return merge(mergeSort(left), mergeSort(unsortedArray));
}

function merge(left, right){
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]){
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right];
}

testArray = [3, 2, 1, 13, 8, 5, 0, 1];
testArray2 = [105, 79, 100, 110];


console.log(mergeSort(testArray), mergeSort(testArray2));