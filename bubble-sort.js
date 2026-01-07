// Bubble sort function
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // 5 2 8 1 9 3
            // 2 5 8 1 9 3
            // 1 2 3 5 8 9
            if (arr[j] > arr[j + 1]) { // If current number is greater than next, swap them
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
