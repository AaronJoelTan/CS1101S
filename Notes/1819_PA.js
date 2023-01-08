// QUESTION 1

function equal_array(A, B) {
    if (!is_array(A) || !is_array(B)) {
        return false;
    } else if (array_length(A) !== array_length(B)) {
        return false;
    } else {
        let is_equal = true;
        const len = array_length(A);
        for (let i = 0; is_equal && i < len; i = i + 1) {
            if (is_array(A[i]) || is_array(B[i])) {
                is_equal = equal_array(A[i], B[i]);
            } else {
                is_equal = equal(A[i], B[i]);
            }
        }
        return is_equal;
    }
}
// NOTE: This is NOT the actual assert function used
//       in the actual Practical Assessment.
function assert(test_name, test_func, truth, dependence) {
    const result = test_func();
    const is_equal = (is_array(truth)? equal_array(result, truth)
                                     : equal(result, truth));
    if (is_equal) {
        display(test_name + ": PASSED");
    } else {
        display(test_name + ": FAILED <<<");
    }
}
//===============================================================



//===============================================================
// TASK 1A
//===============================================================
// function make_big_int_from_number(num) {
//     function looping(val){
//         const rem = val % 10;
//         const new1 = (val - rem)/10;
//         if (new1 === 0){
//             return pair(rem,null);
//         }
//         else{
//             return pair(rem, looping(new1));
//         }
//     }
    
//     return display(looping(num));
// }


// // TASK 1A TESTS
// assert("1A_1", () => make_big_int_from_number(0),
//     list(0), []);
// assert("1A_2", () => make_big_int_from_number(5),
//     list(5), []);
// assert("1A_3", () => make_big_int_from_number(10),
//     list(0,1), []);
// assert("1A_4", () => make_big_int_from_number(1234),
//     list(4,3,2,1), []);
// assert("1A_5", () => make_big_int_from_number(9876543210),
//     list(0,1,2,3,4,5,6,7,8,9), []);


//===============================================================
// TASK 1B
//===============================================================
// function big_int_to_string(bint) {
//     let str = '';
//     const len = length(bint);
//     for (let i = len -1; i >=0; i = i - 1){
//         str = str + stringify(list_ref(bint,i)) ;
//     }
//     return display(str);
// }


// // TASK 1B TESTS
// assert("1B_1", () => big_int_to_string(list(0)),
//     "0", []);
// assert("1B_2", () => big_int_to_string(list(5)),
//     "5", []);
// assert("1B_3", () => big_int_to_string(list(0,1)),
//     "10", []);
// assert("1B_4", () => big_int_to_string(list(4,3,2,1)),
//     "1234", []);
// assert("1B_5", () => big_int_to_string(list(0,1,2,3,4,5,6,7,8,9)),
//     "9876543210", []);
// assert("1B_6", () => big_int_to_string(
//     list(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9)),
//     "9876543210987654321", []);


// //===============================================================
// // TASK 1C
// //===============================================================
function big_int_add(bintX, bintY) {
    // You may modify the given partial implementation,
    // or remove it and write your own.

    function add(x, y, carry) {
        if (is_null(x) && is_null(y)) {
            return (carry === 0) ? null : pair(carry, null);
        } 
        else if (is_null(x)){
            const new_val = display((head(y) + carry) % 10);
            const new_carry = display((head(y) + carry) - ((head(y) + carry) % 10)) / 10;
            return pair(new_val, add(x,tail(y),new_carry ));
        }
        else if (is_null(y)){
            const new_val = (head(x) + carry) % 10;
            const new_carry = ((head(x) + carry) - ((head(x) + carry) % 10)) / 10;
            return pair(new_val, add(tail(x),y,new_carry ));
        }
        else{
            const new_val = ((head(x) + head(y) + carry) % 10);
            const carryyy = ((head(x) + head(y) + carry) - ((head(x) + head(y) + carry) % 10))/10;
            return pair(new_val, add(tail(x),tail(y),carryyy));

        }
    }
    return display_list(add(bintX, bintY, 0));
}


// // // TASK 1C TESTS
// assert("1C_1", () => big_int_add(list(0), list(3,2,1)),
//     list(3,2,1), ["make_big_int_from_number"]);
// assert("1C_2", () => big_int_add(list(5,6,7), list(0)),
//     list(5,6,7), ["make_big_int_from_number"]);
// assert("1C_3", () => big_int_add(list(4,3,2,1), list(5,4,3,2)),
//     list(9,7,5,3), ["make_big_int_from_number"]);
// assert("1C_4", () => big_int_add(list(7,8,9), list(5,6)),
//     list(2,5,0,1), ["make_big_int_from_number"]);
// assert("1C_5", () => big_int_add(list(5,6), list(7,8,9)),
//     list(2,5,0,1), ["make_big_int_from_number"]);
// assert("1C_6", () => big_int_add(
//     list(9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9), list(5)),
//     list(4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1),
//     ["make_big_int_from_number"]);


// //===============================================================
// // TASK 1D
// //===============================================================
function big_int_mult_by_digit(bint, digit) {
    if (digit === 0){
        return list(0);
    }
    else{}

    function add(x, carry) {
        if (is_null(x) && carry !== 0){
            return pair(carry, null);
        }
        else if (is_null(x) && carry === 0){
            return null;
        }
        else{
            const new_val = ((head(x) * digit + carry) % 10);
            const carryyy = ((head(x) * digit + carry) - ((head(x) * digit + carry) % 10))/10;
            return pair(new_val, add(tail(x),carryyy));

        }
    }
    return display_list(add(bint, 0));
}


// // TASK 1D TESTS
// assert("1D_1", () => big_int_mult_by_digit(list(0), 5),
//     list(0), ["make_big_int_from_number", "big_int_add"]);
// assert("1D_2", () => big_int_mult_by_digit(list(7,4,3), 0),
//     list(0), ["make_big_int_from_number", "big_int_add"]);
// assert("1D_3", () => big_int_mult_by_digit(list(7,4,3), 5),
//     list(5,3,7,1), ["make_big_int_from_number", "big_int_add"]);
// assert("1D_4", () => big_int_mult_by_digit(
//     list(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9), 3),
//     list(3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,2),
//     ["make_big_int_from_number", "big_int_add"]);


// //===============================================================
// // TASK 1E
// //===============================================================
function big_int_mult_by_10_pow_n(bint, n) {
    if (head(bint) === 0 && is_null(tail(bint))){
        return list(0);
    }
    else{}
    function create(count){
        if (count !== 0){
            return pair(0, create(count - 1));
        }
        else{
            return null;
        }
    }
    return append(create(n), bint);

}


// // TASK 1E TESTS
// assert("1E_1", () => big_int_mult_by_10_pow_n(list(0), 5),
//     list(0),
//     ["make_big_int_from_number", "big_int_add", "big_int_mult_by_digit"]);
// assert("1E_2", () => big_int_mult_by_10_pow_n(list(7,4,3), 0),
//     list(7,4,3),
//     ["make_big_int_from_number", "big_int_add", "big_int_mult_by_digit"]);
// assert("1E_3", () => big_int_mult_by_10_pow_n(list(7,4,3), 3),
//     list(0,0,0,7,4,3),
//     ["make_big_int_from_number", "big_int_add", "big_int_mult_by_digit"]);
// assert("1E_4", () => big_int_mult_by_10_pow_n(list(5,8,3,1), 20),
//     list(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,8,3,1),
//     ["make_big_int_from_number", "big_int_add", "big_int_mult_by_digit"]);


// //===============================================================
// // TASK 1F
// //===============================================================
function big_int_mult(bintX, bintY) {

    function looping(lst,power){
        if (power < length(bintY)){
            const by_digit = big_int_mult_by_digit(bintX,head(lst));
            const by_10 = big_int_mult_by_10_pow_n(by_digit,power);
            return big_int_add(by_10,looping(tail(lst),power + 1));
        }
        else{
            return list(0);
        }
    }
    return looping(bintY,0);

}


// // TASK 1F TESTS
// assert("1F_1", () => big_int_mult(list(0), list(0)),
//     list(0),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_2", () => big_int_mult(list(0), list(3,2,1)),
//     list(0),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_3", () => big_int_mult(list(3,2,1), list(0)),
//     list(0),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_4", () => big_int_mult(list(3,2,1), list(1)),
//     list(3,2,1),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_5", () => big_int_mult(list(9), list(6)),
//     list(4,5),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_6", () => big_int_mult(list(7,8,9), list(5,6)),
//     list(5,5,1,4,6),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);
// assert("1F_7", () => big_int_mult(
//     list(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1), list(7,8,9)),
//     list(7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,9),
//     ["make_big_int_from_number", "big_int_add",
//     "big_int_mult_by_digit", "big_int_mult_by_10_pow_n"]);


//===============================================================
