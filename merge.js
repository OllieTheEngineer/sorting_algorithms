function merge(arr1, arr2) {
        // create an empty array
        let sortArr = [];
        // Start pointers at beginning of arrays a and b beginning
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length) {
        // if a.val <= b.val, push a.val to out and increase a pointer
            if(arr1[i] < arr2[j]){
                sortArr.push(arr1[i]);
                i++;
        // else, push b.val to out and increase pointer b
            }else {
                sortArr.push(arr2[j]);
                j++;
            }
        }
        while(i < arr1.length){
            sortArr.push(arr1[i]);
            i++;
        }
            while(j < arr2.length){
            sortArr.push(arr2[j]);
            j++;
        }
        return sortArr;
}

function mergeSort(arr) {
    // base case
    if(arr.length <= 1) return arr;
    // recursive case
    const midPoint  = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,midPoint));
    const right = mergeSort(arr.slice(midPoint, arr.length));
    return merge(left, right);
}

module.exports = { merge, mergeSort};