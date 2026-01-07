function sortNumbers() {
    let input = document.getElementById('numberInput').value.trim(); // 5 6 7 8 9 -> string

     if(input === ""){
        alert("Please enter the numbers")
        return;
    }


    let numbers = input.split(/\s+/); // Convert input string to array of numbers // [5,6,7,8,9]

/*
\s → matches any whitespace
    space " "
    multiple spaces
    tabs
    new lines
   + → one or more whitespace characters
*/
    
    let numArray = []; // so that i can convert the string into integers

    for (let i = 0; i < numbers.length; i++) {
        numArray.push(parseInt(numbers[i])); //appending one by one 5 6 7 8 9
    }

    

    // Store original numbers
    let original = [...numArray]; // Creates a copy of the array so original order is preserved.

    let sortType = document.getElementById('sortType').value;
    let sorted;  // variable to store sorted values

    if (sortType === "bubble") {
        sorted = bubbleSort([...numArray]);
    } else if (sortType === "quick") {
        sorted = quickSort([...numArray]);
    } else if (sortType === "selection") {
        sorted = selectionSort([...numArray]);
    } else if (sortType === "insertion") {
        sorted = insertionSort([...numArray]);
    }

    // frequency
    let frequency = {};
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
    let freq = '';
    for (let num in frequency) {
        freq += 'Number ' + num + ' appears ' + frequency[num] + ' times<br>';
    }
    document.getElementById('frequency').innerHTML = freq;
    document.getElementById('result').style.display = 'block';
    // block is a CSS display value
}


function resetNumbers(){
    document.getElementById('numberInput').value = "";
    document.getElementById('original').innerHTML = "";
    document.getElementById('sorted').innerHTML = "";
    document.getElementById('frequency').innerHTML = "";
    document.getElementById('result').style.display = 'none';
    
}
