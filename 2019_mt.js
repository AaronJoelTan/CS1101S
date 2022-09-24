
// function eval_BAE(bae){
//     display('head' + stringify(bae));
    
//     function is_sum(lst){
//         return is_pair(lst) && head(tail(lst)) === '+';
//     }
//     if (is_number(bae)){
//         return bae;
//     }
//     else if (is_sum(bae)){
//         display('this is' + stringify(bae));
//         return eval_BAE(head(bae)) + eval_BAE(head(tail(tail(bae))));
//     }
//     else{
//         display(bae);
//         return eval_BAE(head(bae)) * eval_BAE(head(tail(tail(bae))));
//     }
// }


// const bae1 = 123;
// display(eval_BAE(bae1)); // returns 123
// const bae2 = list( list(2, "+", 7), "*", 100 );
// display(eval_BAE(bae2)); // returns 


// function negate_BAE(bae){
//     function change_sum(lst){
//         return list(-head(lst), '+', -head(tail(tail(lst))));
//     }
//     function change_product(lst){{
//         return list(-head(lst), '*', head(tail(tail(lst))));
//     }
//     function is_sum(lst){
//         return is_pair(lst) && head(tail(lst)) === '+';
//     }
//     function is_product(lst){
//         return is_pair(lst) && head(tail(lst)) === '*';
//     }
//     if (is_number(bae)){
//         return -bae;
//     }
//     else if is_sum(bae){
//         return change_sum(bae)
//     }
    
// }

// const twice = https://sourceacademy.nus.edu.sg/courses/41/missionsf => (x => f(f(x))); const thrice = f => (x => f(f(f(x))));

// display((thrice(twice(x => 2 * x)))(1));

// function mystery(f, x) { return x === 0
// ? f(x)
// : mystery(x => f(x + 1), x - 1);
//   }
//   mystery(x => 7 * x, 8);
   
   
// const x = pair(pair(null, pair(4, null)), 5);


// function last_comes_first(xs){
//     function helper(current,xs){
//         if (is_null(tail(xs))){
//             return append(xs,current);
//         }
//         else{
//             return helper(append(current,list(head(xs))),tail(xs));
//         }
//     }
//     return helper(null,xs);
// }
// display_list(last_comes_first(list(2,5,3,4,5)));


function fib_list(n){
    function helper(current,num1,num2,n){
        if (n === 0){
            return current;
        }
        else{
            return helper(append(current,list(num1 + num2)),num2,num1 + num2,n-1);
        }       
    }
    return helper(list(0,1),0,1,n-2);
}
display_list(fib_list(7)); // returns list(0, 1, 1, 2, 3, 5, 8)