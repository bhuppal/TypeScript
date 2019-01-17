/*
Using interface, we declaring 2 string objects such as
firstName and lastName.
*/
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Bhuppal", lastName: "Kumar" };
document.getElementById("txtResult").value = greeter(user);
