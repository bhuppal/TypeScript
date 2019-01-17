/*
greeter.ts typescript file
I declared a string variable "user" and a function greeter.
The greeter method takes a strign argument 
and in our case "user" variable and display inside body tag of greeter.html file.
*/

function greeter(person:string):string{
    return "Hello, " + person;
}
let user:string = "Bhuppal Kumar";

(<HTMLInputElement>document.getElementById("txtResult")).value = greeter(user);

