let dataNascLeo = new Date('1988-05-27T00:00:00');
let dataNascLucas = new Date('1996-08-03T00:00:00');
let dataNascLarissa = new Date('1996-12-06T00:00:10');
let dataNascRayssa = new Date('1996-12-06T00:00:07');

console.log(dataNascLeo);
console.log(dataNascLucas);
console.log(dataNascLarissa);
console.log(dataNascRayssa);

if (dataNascLarissa < dataNascRayssa) {
    console.log('Larissa é mais velha');
} else if (dataNascLarissa > dataNascRayssa) {
    console.log('Rayssa é mais velha');
    } else {
    console.log('As duas nasceram na mesma data e hora');
}