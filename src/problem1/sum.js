var sum_to_n_a = function(n) {
    // your code here
    return Array.from({length:n}, (_,i)=> i+1).reduce((prevValue, currentValue) => prevValue+currentValue,0);
    
};

var sum_to_n_b = function(n) {
    // your code here
    let ans= 0;
    [...Array(n+1).keys()].forEach((x)=> {
        ans+=x
    })
    return ans
};

var sum_to_n_c = function(n) {
    // your code here
    let ans = 0;
    for (let i =0 ; i<=n ; i++) {
        ans+=i
    }
    return ans
};
console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))