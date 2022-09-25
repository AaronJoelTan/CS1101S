// Question 4 
// function recurse(n){
//     return n>10
//         ? null
//         : pair(pair(n,null),recurse(n+1));
// }
// draw_data(recurse(1));

// Question 5
// function recurse(n){
//     return n > 10
//         ? null
//         : pair(n,pair(recurse(n + 1), null));
// }
// draw_data(recurse(1));




// Question 11
function get_elem(M,r,c){
    function get_it(lst,c,counter){
        if (counter === c){
            return head(lst);
        }
        else{
            return get_it(tail(lst),c,counter);
        }
    }
    return get_it(get_it(M,r,0),c,0);
}

const A = list( list(1, 2, 3), list(4, 5, 6), list(7, 8, 9) );
get_elem(A, 0, 2); // returns 3
get_elem(A, 2, 0); // returns 7




// Question 12
// function horizontal_flip(M){
//     function flipper(product,lst){
//         if (is_null(lst)){
//             return product;
//         }
//         else{
//             return flipper(pair(head(lst),product),tail(lst));
//         }
//     }
//     return map(x => flipper(null, x),M);
// }
// const A = list( list(1,2,3,4), list(5,6,7,8), list(9,10,11,12) );
// display_list(horizontal_flip(A));




//Question 13
// function row_sums(M){
//     return map(x=>accumulate((a,b) => a + b,0,x),M);
// }
// const A = list( list(1,2,3,4), list(5,6,7,8), list(9,10,11,12) );
// row_sums(A);




// Question 17
// function has(t, x) { /* your solution */
//     if (is_number(t)){
//         if (t === x){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     else if (has(head(t),x)){
//         return true;
//     }
//     else if (has(tail(t),x)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// // test
// const t1 = 8;
// display(has(t1, 4)); // returns false 
// display(has(t1, 8)); // returns true
// const t2 = pair(pair(1, 2), pair(3, pair(4, 5))); has(t2, 4); // returns true
// display(has(t2, 8)); // returns false
// display(has(t2, 6));


//Question 18
// function apply(p,t){
//     // display(p);
//     if (is_null(p)){
//         return t;
//     }
//     else{
//         return apply(tail(p),head(p)(t));
//     }
// }

// //test
// const t1 = 8;
// display(apply(null, t1)); // returns 8
// const t2 = pair(pair(1, 2), pair(3, pair(4, 5)));
// display(apply( list(tail, tail, head), t2 )); // returns 4
// display(apply( list(head), t2 )); // returns pair(1, 2)


//Question 19
// function find_8(t) { /* your solution */
//     function tracker(path,t){
//         display(t);
//         if (is_number(t)){
//             if (t === 8){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }
//         else if (tracker(pair(head,path),head(t))){
//             return pair(head,path);
//         }
//         else if (tracker(pair(tail,path),tail(t))){
//             return pair(tail,path);
//         }
//         else{
//             return false;
//         }
//     }
//     return tracker(null,t);
// }

// //test
// const t1 = 8;
// find_8(t1); // returns null
// const t3 = pair(pair(1,8),pair(2,3));
// find_8(t3);
// const t2 = pair(pair(1, 2), pair(3, pair(8, 5)));
// find_8(t2); // returns list(tail, tail, head)

// const random = 2;
// display(!random);