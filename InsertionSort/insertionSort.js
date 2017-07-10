const numbers = [2,8,6,44,35,69,78,54,2];

let insertionSort2 = numbers => {
  let temp = [];
  for (var i = 1; i < numbers.length; i++) {
    for (var j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      temp = numbers.splice(i,1);
      numbers.splice(j, 0, temp[0]);
    }
    }
  }
  return numbers;
}
const sortedNumbers = insertionSort2(numbers);
console.log(sortedNumbers);
