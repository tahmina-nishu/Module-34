/*
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('printed after 2 second');
},2000) 

console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
*/

/*
let i = 1;
const brk = setInterval(() => {
    console.log(i);
    i++;

    if(i > 10)
        clearInterval(brk);
},1000) 
*/

/*
function a(){
    console.log('a');
    b();
    console.log('aa');
}

function b(){
    console.log('b');
    console.log('bb');
}


function x(){
    console.log('x');
    y();
    console.log('xx');
}

function y(){
    console.log('y');
    console.log('yy');
}
a();
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

x();
*/
