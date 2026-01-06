function sortNumbers() {
    let input = document.getElementById('numberInput').value.trim(); //"5 2 8 1 9 3"

    if(input === ""){
        alert("Please enter the numbers")
        return;
    }


    let numbers = input.split(' '); // Convert input string to array of numbers num = ["5", "2", 8 1, 9, 3]
    let numArray = []; // 5 2 8 1 9 3

    for (let i = 0; i < numbers.length; i++) {
        numArray.push(parseInt(numbers[i]));
    }

    // Store original numbers
    let original = [...numArray]; // Creates a copy of the array so original order is preserved.

    // Sort using bubble sort
    let sorted

    let sortType = document.getElementById('sortType').value

    if(sortType === "bubble"){
        sorted = bubbleSort(numArray);
    } else if(sortType === "selection"){
        sorted = selectionSort(numArray);
    }


    // frequency
    let frequency = {}; // object literal -> key values
                                         //  num  frequency
                                        //  {
                                        //     num feq[num]
                                        //     5: 1 
                                        //     2: 1
                                        //     8: 1
                                        //     1: 1
                                        //     9: 1
                                        //     3: 1
                                        //     3: 1 +1 =2
                                        //  }

    for (let i = 0; i < sorted.length; i++) {
        let num = sorted[i];
        if (frequency[num]) {
            frequency[num] = frequency[num] + 1;
        } else {
            frequency[num] = 1;
        }
    }

    // Display results
    document.getElementById('original').innerHTML = original; 
    document.getElementById('sorted').innerHTML = sorted;


    // Display frequency
    let freqText = '';
    for (let num in frequency) {
        freqText += 'Number ' + num + ' appears ' + frequency[num] + ' times<br>';
    }
    document.getElementById('frequency').innerHTML = freqText;
    document.getElementById('result').style.display = 'block';
    // block is a CSS display value
}
