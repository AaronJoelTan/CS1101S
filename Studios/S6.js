// function my_map(f,xs){
//     return accumulate((x,y) => pair(f(x),y), null, xs);
// }
// display_list(my_map(x => x + 1, list(1, 2, 3)));



function remove_duplicates(lst) {
    // idea of remove_duplicates is to first get first element, then
    // call itself again for second element with a new list without 
    // the first element
    // to create a new list without first element, we can loop
    // the current list using filter, and see if the element is
    // same as first element, if it is, then return false
    return is_null(lst)
        ? null
        : pair(head(lst), remove_duplicates(filter(x => !equal(x,head(lst)),tail(lst))));
}

display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));


function makeup_amount(x, coins) {
    // dk
    if (x === 0) {
        return list(null);
    }
    else if (x < 0 || is_null(coins)) {
        return null;
    } 
    else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x,tail(coins));
        // Combinations that do not use the head coin // for the remaining amount.
        const combi_B = makeup_amount(x- head(coins),tail(coins));
        // Combinations that use the head coin.
        const combi_C = makeup_amount(x,)
        return append(combi_A, combi_C);
    } 
}
