////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE
class Employee {
    constructor(name, shifts) {
        this.name = name,
        this.shifts = shifts;
    }

    getSchedule() {
        let employeeSchedule = `${this.name} works on `;
        for (let i = 0; i < this.shifts.length; i++) {
            if(i === this.shifts.length - 1 && i !== 0) {
                employeeSchedule += `and ${this.shifts[i]}.`;
            } else if(this.shifts.length === 1) {
                employeeSchedule += `${this.shifts[i]}.`;
            } else if(i === this.shifts.length - 2) {
                employeeSchedule += `${this.shifts[i]} `;
            } else {
                employeeSchedule += `${this.shifts[i]}, `;
            }
        }
        console.log(employeeSchedule);
    }
}


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
let empOne = new Employee(`Jess`, [`weekday mornings`, `weekday afternoons`, `weekend nights`]);

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
empOne.getSchedule();

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE
let empTwo = {...empOne, name: `Nick`};
// OR empTwo.name = `Nick`;
console.log(empTwo);


//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE
class Manager extends Employee {
    constructor(name, shifts, employees) {
        super(name, shifts);
        this.employees = employees;
    }

    getEmployees() {
        let employeesList = `${this.name} manages `;
        for (let i = 0; i < this.employees.length; i++) {
            if(i === this.employees.length - 1 && i !== 0) {
                employeesList += `and ${this.employees[i]}.`;
            } else if(this.employees.length === 1) {
                employeesList += `${this.employees[i]}.`;
            } else if(i === this.employees.length - 2) {
                employeesList += `${this.employees[i]} `;
            } else {
                employeesList += `${this.employees[i]}, `;
            }
        }
        console.log(employeesList);
    }

    addEmployee(emp) {
        this.employees.push(emp);
    }
}


/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE
let manager = new Manager(`Winston`, [`weekday mornings`, `weekday afternoons`], [`Cece`, `Schmidt`, `Jess`]);

/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE
manager.getEmployees();
/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 
manager.addEmployee(`Coach`);

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE
manager.getEmployees();