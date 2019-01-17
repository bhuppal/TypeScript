class Student{
    fullName:string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string)
    {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let user = new Student("Bhuppal", "G H", "Kumar");

(<HTMLInputElement>document.getElementById("txtResult")).value = user.fullName;