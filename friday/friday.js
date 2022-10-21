


// I did not solve this problem.

let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
  let i=0;

while (i<arr.length){
    if (arr[i]<arr[i+1]){
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1]=temp
        i=-1
    }
    i++;
}

console.log(arr[2])
