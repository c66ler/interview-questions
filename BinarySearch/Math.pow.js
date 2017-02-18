var myPow = function(x, n) {
    if (n === 0) return 1;

    if (n < 0) {
        n = -n;
        x = 1/x;
    }

    var x2 = x*x;

    // Important: because of Math.floor(n/2) we need to multiply by x if n is ODD
    if (n%2 === 0) {
        return myPow(x2, Math.floor(n/2));
    }
    else {
        return x * myPow(x2, Math.floor(n/2));
    }
};

console.log(myPow(2, 10));
