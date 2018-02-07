// Do the maths
for(
    var sum = 0, i = 1;
    i < 1000;
    !(i % 3 && i % 5) && (sum += i), i++
);
// Log the result
console.log(sum);
