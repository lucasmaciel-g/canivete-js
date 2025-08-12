let nascLucas = new Date('1996-08-03T12:55:47'); // instanciando objeto 'Date' para a variável niverLucas
let idadeLucas = 12;
let idadeAno = nascLucas.getFullYear() + idadeLucas;
let nascLucasUTC = nascLucas.toUTCString();
console.log(nascLucas);
console.log(idadeAno);
console.log(nascLucasUTC);
console.log(nascLucas);
console.log('=======');

let dataPedido = new Date(Number((1735934520) * 1000));
let dataEntrega = new Date(dataPedido);
dataEntrega.getDate();
console.log(dataPedido);
console.log(dataEntrega);

console.log('=======');
let nome = 'Lucas';
let primeiroNome = nome;
primeiroNome = 'Leo';
console.log(nome);
console.log(primeiroNome);
