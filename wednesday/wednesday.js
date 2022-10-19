function Factorialize(num) {
    if ((num === 0) || (num === 1)) {
        return 1;
    }

    for (let i = num - 1; 0 <i; i--) {
        num = num * i;
    }
    return num;
}

console.log(Factorialize(3))



