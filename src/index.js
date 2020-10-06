module.exports = function reverse (n) {
    const modulus = Math.abs(n);
    return Number(Array.from(String(modulus)).reverse().join(''));
}
