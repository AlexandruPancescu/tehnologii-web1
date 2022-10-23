class Student{
   // clasa e o functie mai specializata
     
    constructor(name, surname, grup)
    {this._name = name; 
this._surname = surname;
this._grup = grup;
    }
    set name(name){ 
        this._name = name;
    }
    get name(){
        return this._name;
    }
set surname(surname){
    this._surname = surname;
}
get surname(){
    return this._surname;
}

set grup(grup){
    this._grup = grup;
}
get grup(){
    return this._grup;
}
doSomething = ()=> {
    console.log("I am doing something" , this);
}
}


let student = new Student("Ion", "Popescu", 123);
student.doSomething();


class Employee extends Student{
    constructor(name, surname, grup, salary){
        super(name, surname, grup);
        this._salary = salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get salary(){
        return this._salary;
    }
    // doSomething = ()=> {
    //     console.log("I am doing something" , this);
    // }
    doSomethingEmployee = ()=> {
        console.log(this); 
        function callMe(){
            console.log(this);
        }
        callMe.bind(this)();    
        //METODA IMP PENTRU CAND THIS-UL ESTE UNDEFIEND 
    }
}


let employee = new Employee("Ion", "Baciu ", 123, 102423243250);
employee.doSomethingEmployee();