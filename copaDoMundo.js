// usuário quer uma contagem regressiva diária de quantos dias faltam para a world cup soccer!

// Pega a data da próxima copa do mundo
let dataCopa = new Date('2026-06-11T00:00:00');
console.log(dataCopa);

// Pega a data do dia atual
let dataAtual = new Date();
dataAtual.setHours(0);
dataAtual.setMinutes(0);
dataAtual.setSeconds(0);
dataAtual.setMilliseconds(0);
console.log(dataAtual);

// Pega contagem de dias de forma regressiva
let diasParaCopa = ((((dataCopa - dataAtual) / 1000) / 60) / 60) / 24;
let diasParaCopaArredondado = Math.ceil(diasParaCopa);
console.log(diasParaCopaArredondado);

// Cálculo da contagem regressiva 


// Exibe a mensagem de quantos dias faltam