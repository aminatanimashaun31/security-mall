
let entryCount = 0, denialsCount = 0;

function processSubmit(){

    let ageVal = document.getElementById('age').value;
    let nameVal = document.getElementById('name');
    let faceMaskVal = document.getElementById('face-mask').value;


    if( ageVal >= 12  && faceMaskVal == 'Yes')
    {
        alert('Welcome to Meenah Mall' );
        entryCount++;
    }
    if( ageVal < 12 && faceMaskVal == 'Yes' ){
        alert('You Must Be 12 Years Or Older To Enter Meenah Mall');
        denialsCount++;
    }

    if(faceMaskVal == 'No')
    {
        alert('You are denied entry into Meenah Mall');
        denialsCount++;
    }
console.log(entryCount+' '+denialsCount);
    // alert(ageVal.value);
    // alert(faceMaskVal.selected);
    
}

