function jumlahArray(arr){
    let total = 0;
    for (let i = 0; i<arr.length; i++){
        total+=arr[i];
    }
    return total;
}

console.log(jumlahArray([1,2,3,4,5]));