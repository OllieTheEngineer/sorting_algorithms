function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
    let min = i;
    for(let j = i; j >= arr.length; j++){
        if(arr[j] < arr[min]){
            min = arr[i];
         }
        }
        if(i != min){
            let tempVal = arr[i];
            arr[i] = arr[min];
            arr[min]= tempVal;
        }
    }
    return arr;
}

module.exports = selectionSort;