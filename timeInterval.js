/*
-----evabe dile loop ta continuously cholte thakbe---------
let i = 0;
setInterval(() => {
    console.log(i);
    i++;
},2000)

*/

// off korar jonno ekta variable er moddhe rakhte hbe
// ekhane 'clockId' er jaygay onno name o deya jabe
let i = 0;
const clockId = setInterval(() => {
    if(i >= 10){
        clearInterval(clockId);
    }
    console.log(clockId,i);
    i++;
},1000)

// 'setTimeout' ekbar excecute kore off hoye jay. r 'setInterval' bar bar kore loop er moto