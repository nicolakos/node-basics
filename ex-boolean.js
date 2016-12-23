var isValid = false;

function toggleBoolean(booleanVar){
  
  if (typeof booleanVar === 'boolean'){
    return !booleanVar;
    // Shame result as above
    // if(booleanVar === true){
    //   return false;
    // } else if (booleanVar === false){
    //   return true;
    // }  
  } else {
    console.log('Warning! Not a boolean');
  }

  
}

var newBoolean = toggleBoolean(isValid);

console.log(newBoolean);

var newBoolean = toggleBoolean('Nikos');

console.log(newBoolean);