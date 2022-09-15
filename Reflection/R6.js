// Qn 1
function insert_cmp(x, xs, cmp) { return is_null(xs)
? list(x)
: cmp(x, head(xs))
? pair(x, xs)
: pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) { return is_null(xs)
               ? xs
               : insert_cmp(head(xs),
insertion_sort_cmp(tail(xs), cmp), cmp);
}


function cmp(x,y){
    if (x%2===0 && y%2!==0){
        return true;
    }
    else if(x%2===0 && y%2===0){
        return x < y ? true : false;
    }
    else if(x%2 !==0 && y%2 !==0){
        return x < y ? false : true;
    }
    else{
        return false;
    }
}

const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);
display_list(insertion_sort_cmp(xs,(x,y) => x < y ? true : false));
display_list(insertion_sort_cmp(xs,(x,y) => x > y ? true : false));
display_list(insertion_sort_cmp(xs,(x,y) => x > y ? false : false));
display_list(insertion_sort_cmp(xs,cmp));

// Qn 2
// O(n)
// 2n^3?   merge sort N, merge N, variables in merge 2N so 2N^3
