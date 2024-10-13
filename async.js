/*

//promise er syntax 

const myLoader = () => {
    return new Promise((resolve, reject) => {   
        
    })
}
*/

const myLoader = () => {
    return new Promise((resolve, reject) => {   
        const success = true;
        if(success){
            resolve(0.3)
        }
        else{
            reject(0.7)
        }
    })
}

// another function
const myLoader2 = () => {
    return new Promise((resolve, reject) => {   
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader2()
.then(data => console.log('resolved data', data))
.catch(err => console.log('rejected with value', err))


//fetch ta k efficient korar jonno evabe likha hoy
async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

loadData();

// same functiion ta k arrow function diye likhle
const taskLoader = async() => {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}