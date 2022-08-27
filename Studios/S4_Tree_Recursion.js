function pascal(row,position){
    // The value at a position x at row y is sum of value at position x and x-1
    // at row y - 1
    return row === 0 || row === 1 || position === 0 || position === row
        ? 1
        : pascal(row - 1,position - 1) + pascal(row - 1,position);
}
display(pascal(5,1));
