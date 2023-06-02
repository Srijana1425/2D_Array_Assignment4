let nums1 = [1,2,3], nums2 = [2,4,6]
var uncommon = function(nums1, nums2) {
    let i = new Set();
    nums1.map((num) => i.add(num));

    let j =  new Set();
    nums2.map((num) => j.add(num));

    let x = new Array();
    let y = new Array();

    for(let x1 of i){
        if(!j.has(x1)){
            x.push(x1);
        }
    }
    for(let y2 of j){
        if(!i.has(y2)){
           y.push(y2);
        }
    }

    return [x,y];

};
console.log(uncommon(nums1, nums2));