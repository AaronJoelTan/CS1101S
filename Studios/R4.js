// this index starts from 1


// 3a
// const lst = list(7, 6, 5, 4, 3, 2, 1);
function finding_4(lst,index){
    return index === 1
        ? head(lst)
        : finding_4(tail(lst),index-1);
}
// display(finding_4(lst,4));


// 3b

// const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
function finding_4_again(lst){
    return finding_4(finding_4(lst,2),3);
}
// display(finding_4_again(lst));


// 3c
// too complex???
const lst = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
function haiz(lst){
    return finding_4(finding_4(lst,2),3);
}