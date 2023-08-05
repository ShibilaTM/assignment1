const arr=[2,4,5,7,9,13];
console.log(arr);
console.log('first element= '+arr[0]);
let flag=true;
if(arr[0]==1){
    console.log('1 is neither prime nor composite number');
}
else if(arr[0]>1){
for(let i=2;i<4;i++){
    if(arr[0]%i==0){
        flag=1;
        break;
    }
}
if(flag==false){
    console.log('the number is not prime');
}else{
    console.log('the number is prime');
}
}
else{
    console.log("number is not prime");
}