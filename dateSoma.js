let nascLucas = new Date('1996-08-03T12:55:47'); // instanciando objeto 'Date' para a variável niverLucas
let idadeLucas = 12;
let idadeAno = nascLucas.getFullYear() + idadeLucas;
let nascLucasUTC = nascLucas.toUTCString();
console.log(nascLucas);
console.log(idadeAno);
console.log(nascLucasUTC);
console.log(nascLucas);