const arr=[14,4,2,4,5,7,9,13];
console.log(arr);
console.log('first element= '+arr[0]);
let isPrime = true;

// check if number is equal to 1
if (arr[0] === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if(arr[0]===2){
    console.log("it is a prime number");
}


else if (arr[0]> 1) {

  
    for (let i = 2; i<(arr.length)/2; i++) {
        if (arr[0]% i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('number is a prime number');
    } else {
        console.log(' number is  not prime number');
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}