var numbers = [34, 203, 3, 746, 200, 984, 198, 764, 9];

let bubbleSort = numbers => {
  let swapped;
  let temp;
  do{
    swapped = false;
    for (var i = 0; i < numbers.length-1; i++) {
      if (numbers[i] > numbers[i+1]) {
        temp = numbers[i];
        numbers[i] = numbers[i+1];
        numbers[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped) {
  return numbers;
  }
}
let swappedNumbers = bubbleSort(numbers);
console.log(swappedNumbers);
