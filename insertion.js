function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let valToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > valToInsert){
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        arr[j + 1] = valToInsert;
    }
    return arr;
}

const arr = [10,30,3,6,8];
insertionSort(arr)

module.exports = insertionSort;