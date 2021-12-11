let x = 0;

function ecquad(a, b, c) {
let part1= -b;
let part2 = Math.pow(b, 2);
let part3 = (part2)+(-4*(a*c));
let part4 = (part1)+(Math.sqrt(part3));
x = (part4)/(2*a);
return x;
}

ecquad(2,3,4);

