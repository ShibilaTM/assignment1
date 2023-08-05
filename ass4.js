const arr=[5,6,7,8,9];
console.log(arr);
let num;
let sum=0;
for(let i=0;i<arr.length;i++){
    num=arr[i]*arr[i];
    sum=sum+num;
}
console.log('squares of sum of the array = '+sum);