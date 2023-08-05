const arr=[10,30,10,20,10,70,10,70,70,80,70,60,70];
console.log(arr);
let maxcount=1;
let count=0;
var element;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
            if(maxcount<count){
                maxcount=count;
                element=arr[i];
            }

        }
    }
    count=0;
}
   console.log('the frequent element is '+element);
 console.log('the frequency is '+maxcount);
