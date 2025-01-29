try{
    let x = Number(prompt('Enter numerator'));
    let y = Number(prompt('Enter denominator'));
    const result = x/y;
    if(y === 0){
        throw new Error('you cant divide by zero');
    }
    else if(isNaN(x) || isNaN(y)){
        throw new Error('Invalid input');
    }
    else{
        console.log(result);
    }
}
catch(error){
    console.log(error);
}
finally{
    console.log('Finally block');
}