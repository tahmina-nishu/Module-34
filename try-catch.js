/*
function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    console.log(11111);
    try{
        //console.log(nmbr);      // ei line ta try er baire likhle error er porer r kichu excecute hobe na. kintu error er vitor likhle eta baad diye bakigula excecute hobe

        const age = parseInt(ageText);

        if(isNaN(age)){
            //console.log('age not found', age, ageText)
            throw "Please enter a number";
        }

        else if(age < 18){
            throw "Below 18 is not allowed";
        }

        else if(age > 30){
            throw "After 30 is not allowed";
        }

        errorTag.innerText = '';    // error na hole error msg ta clear hoye jabe
    }

    catch(err){
        console.log('ERROR: ', err);
        errorTag.innerText = 'Error!' + ' ' + err;
    }

    // finally er moddhe jeta thakbe eta must kaj korbe alltime
    finally{
        console.log('All done inside try catch');
    }
}
    */

function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "Below 18 is not allowed";
        }

        else if(age > 30){
            throw "After 30 is not allowed";
        }
        errorTag.innerText = '';
    }

    catch(err){
        errorTag.innerText = 'Error! ' + err;
    }
}