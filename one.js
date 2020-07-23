console.log("odd or even number using function");
let n = prompt("enter the  number", );

function printOdd(n) {
    if (n % 2 == 0) {
        console.log(`the number is ${n} and its even`);
        console.log(n);
    } else {
        console.log(`the number is ${n} and its odd`);
        console.log(n);
        return n;
    }

}

let num = printOdd(n)
console.log(parseInt(num))