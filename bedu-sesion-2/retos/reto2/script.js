// var res = 3 % 1;
// var res1 = 3 % 3;

// console.log(res);
// console.log(res1);


for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }