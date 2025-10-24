function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

const arr = [5, 2, 9, 1, 5, 6];
console.log("Sebelum diurutkan:", arr);
const sortedArr = insertionSort(arr);
console.log("Setelah diurutkan:", sortedArr);
