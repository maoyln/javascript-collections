function wait(message){
    setTimeout(function timer(){
      console.log(message);
    }, 1000)
}
wait("Hello, World!");


for ( var i = 0; i < 5; i++) {
    wait(i);
}

// -----------------------------------------------

for ( var i = 1; i <= 5; i++) {
  setTimeout(function timer(){
    console.log(i);
  }, i * 1000)
}


for ( let i = 1; i <= 5; i++) {
  setTimeout(function timer(){
    console.log(i);
  }, i * 1000)
}

for ( var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer(){
      console.log(j);
    }, j * 1000)
  })(i)
}

for ( var i = 1; i <= 5; i++) {
  let j = i;
  setTimeout(function timer(){
    console.log(j);
  }, j * 1000)
}