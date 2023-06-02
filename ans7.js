let m = 3, n = 3, ops = [[2,2],[3,3]]
var maximumintegers= function(m, n, ops) {
    if(ops.length === 0) return m*n;
    let min = [m,n];
    for(let [x,y] of ops) {
        min = [Math.min(x, min[0]), Math.min(y, min[1])];
    }
    return min[0]*min[1];
};    
console.log(maximumintegers(m,n,ops))