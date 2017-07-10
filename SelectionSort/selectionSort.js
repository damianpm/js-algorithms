let selectionSort = items => {
  for (let i = 0; i < items.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (min != i) {
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
  return items;
}
const numbers = [
  2,
  8,
  6,
  44,
  35,
  69,
  78,
  54,
  2
];
const sortedItems = selectionSort(numbers);
console.log(sortedItems);
