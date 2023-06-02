let n = 5
var staircase = function(n) {
    let start = 0;
    let end = n+1;
    while(start < end){
        let mid = start+Math.floor((end-start)/2)
        let product = ((mid+1)*(mid+2))/2
        if(product> n) {
          end = mid  
        } else {
            start = mid+1
        }
    }
    return start
};
console.log(staircase(n));