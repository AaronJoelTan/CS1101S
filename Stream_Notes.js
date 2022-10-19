// function create_stream(xs){
//     if ()
//     function random(ys){
//         if (is_null(ys)){
//             return random(xs);
//         }
//         return pair(head(ys), () => random(tail(ys)));
//     }
//     return random(xs);
// }






// const a = create_stream(list(1,2,3));

// eval_stream(a,10);





// to create repeating sequence 

// const a = pair(1, () => pair(2, () => a));

// eval_stream(a,5);





// creating append stream function

// function appends(s1,s2){
//     if (is_null(head(s1))){
//         display(head(s2));
//         return head(s2);
//     }
//     else if (is_null(head(s2))){
//         display(head(s2));
//         return head(s1);
//     }
//     else{
//         display(head(s1));
//         display(head(s2));
//         return pair(head(s1) + head(s2), () => appends(stream_tail(s1),stream_tail(s2)));
//     }
// }

// const a = enum_stream(1,10);
// const b = enum_stream(100,110);


// const c = eval_stream(appends(a,b),11);
// c;





// stream ref function
function ms(m, s) { display(m);
return s; }

function string_ref(s,idx){
    function inner(s,idx1){
        if (idx1 === 0){
            return head(s);
        }
        else {
            return inner(stream_tail(s),idx1-1);
        }
    }
    return inner(s,idx);
}

const a = pair(1, () => ms('A',a));

display(string_ref(a,3));





