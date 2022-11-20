function addTokens(input, tokens) {

  let elipsisPoints = '...'
  
  //verify input type
if (typeof(input) === "string"  ) {

  //verifiy input length
  if( input.length >= 6){
    let i = 0 ; 
    for (let i = 0; i < tokens.length ;i++ ){
      if ( typeof(tokens[i].tokenName) !== 'string' ){
        throw  new Error("Invalid array format")
      }
    }

    // does not include ...
    if( !input.includes(elipsisPoints) ){
      return input; 

    }
    //replace ... with the tokens 
    else{
     let newInput = " " ; 
      //let newInput = input; 
      for (let i = 0 ; i< tokens.length; i++){
        
          //let poz= input.search("...");  
          let val = tokens[i].tokenName; 
          
          newInput = input.replace(' ...' ,` \${${val}}`); 
          console.log(val)
      }
      return newInput;

    }



  }else{
    throw new  Error("Input should have at least 6 characters"); 
  }


}else{
  throw new  Error("Input should be a string")
}




}
const app = {
  addTokens: addTokens,



};

module.exports = app;