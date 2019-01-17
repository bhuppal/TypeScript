/*
Using interface, we declaring 2 string objects such as 
firstName and lastName. 
*/

interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Bhuppal", lastName:"Kumar"};

(<HTMLInputElement>document.getElementById("txtResult")).value = greeter(user);

