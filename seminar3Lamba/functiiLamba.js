
console.log("test2");
let concat = (stringArray) => {
    let result = "";
    for (const string of stringArray) {
        if (typeof string === "string") {
            result = result.concat(string);
            result += " ";
        }
        else {
            throw new Error("Tipurri de data diferite!");
        }

    }

    return result;
}

//console.log(concat(["a", "b", "c"]));

// const concatNum = (numberList) => {
//     let result = []; 
// if (typeof numberList !== "string" ){
//     throw new Error("Tipurri de data diferite!");

// }else{ 
//     let splitList = numberList.trim().split(",");
//     for (let item of splitList){ // vezi diferenta intre of si in!!!!
//         result.push(parseInt(item)) ; 
//     }
// }
// return result ; 
// }

function diffrence(string1, string2)  {
    let counter = 0 ; 
    console.log("test"); 
    for(let i =0; i < string1.length ; i++){
        if(!string2.includes(string1[i])){
            counter++; 
            console.log(counter); 
        }
    }
    return string1.length !== string2.length ? -1 : counter; 
}
console.log(diffrence("test", "test") , "-> rezultat "); 

let rezultat = diffrence("test123", "tes3t123") !== -1 ? -1: 222; 
console.log("rezultat: ", rezultat); 

function difference(string1, string2) {
    let counter = 0;
    for (let i = 0; i < string1.length; i++) {
      if (!string2.includes(string1[i])) {
        // includes() is a "string" data type built-in method
        counter++;
      }
    }
    // (= = =) vs (! = =) => checks the data type equality too
    // ternary operator => (condition) ? if true : if false => an alternative to (if then else)
  
    return string1.length !== string2.length ? -1 : counter;
  }
  
  console.log(difference("test124", "test1253"));












