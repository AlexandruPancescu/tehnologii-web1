// // cum se arunca exceptii, cum se foloseste blocul try catch
// // keyword pt throw => throw new Error("eraore");

// const orderCofee = (type) => {
//     const types = {
//     SPECIAL: "special",
//     REGULAR: "regular" 
//     }
//     if (Object.values(types).indexOf(type) === -1) {
//     // invalid type 
//     throw new Error("eroare la cafea");    
//     }else {
//         // valid type
//         console.log("preparing ${type} coffee");
//     }
// }
// try{
//     orderCofee("special"); 
//     orderCofee("regular");
//     //orderCofee("espresso"); 

// }
// catch(err) {
// console.warn(err);
// }


// 2. 
// let increaseSalary = (salariesArray, increasePercentage) => {

// const increaseSalariesArray = []
// if(Array.isArray(salariesArray) && typeof  increasePercentage === "number"){
// for (let salary of salariesArray){
//     let increaseSalary = salary + (salary* increasePercentage);
//     increaseSalariesArray.push(increaseSalary); 
// }
// }
// else{ // TYPE error 
// throw new Error("parametru invalid");
// }


// return increaseSalariesArray; 
// }

// try {
// console.log(increaseSalary([1,2,3,4343,5,43], "10"));
// //increaseSalary([1,2,3,4343,5,43], "test");
// }
// catch(err){
//     console.log(err.message); 
// }


// prototype feature din js care te ajuta sa refolosesti cod 
// prototipul unui obiect 