// function f(w) {
//     const x = 3;
//     function g(x) { 
//         return w + x;
//     }
//     return 2 * g(w); 
// }
// const w = 5;
// f(w + 2);



// const x = 3;
// function fun(x) {
//     if (x % 2 === 0) {
//         const z = 20;
//     } 
//     else {
//         const z = 30;
//     }
//     return x + y + z;
// }
// const y = 5;
// const z = 10;
// fun(x + y);


// function fib(n) { if (n <= 1) { return n;
// } else {
// const x = fib(n - 2) + fib(n - 1); display(x);
// return x;
// } }
// fib(5);

function D(m, x) { display(m);
return x; }
    D(1, x => D(2, D(3, 3) * D(4, x))) (D(5, 5));
    // same as (x => 3 * x)(5);