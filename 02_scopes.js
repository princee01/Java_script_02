
//var c=300
let a = 200;//if we are using a globally it will remain 200 but insise that block scope it will 10.
//{}:scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    
    //console.log("inner:", a);//10
}
//console.log(a);// a is not defind.
//console.log(b);// b is not defind.
// console.log(a);//200
// console.log(c);//30

//nested scope
function one() {
    const username = "prince";

    function two() {
        const website = "youtube";
        //console.log(username);
    }
    //console.log(website);//it will give error bcz we are accessing it outside the scope.
    two();
}
one();
//output:prince

//++++++++++++++++++++++++++++++++++interseting++++++++++++++++++++++++++++++++++

//basic function
console.log(addone(5));
function addone(num) {
    return num + 1;
}

//expression
//in this case we can access this before declaration

//expression
console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2;
}
