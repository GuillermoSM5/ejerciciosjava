function loop(start, test, update, body) {
      while(test(a)){
          body(a)
          a=update(a);
     }
  }
  var test = function(n) {
    return n > 0;
  }
  var update = function(n) {
    return n - 1;
  }
  loop(3, test, update, console.log);
  // 3
  // 2
  // 1

