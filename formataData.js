// Pega data atual
let dataAtual = new Date(2025, 7, 1);

// Formata para Brasil
let dataAtualFormatoBrasil = new Date(dataAtual).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).split(',')[0];

// Data Atual formato Brasil extenso
let dataAtualFormatoBrasilExtenso = new Date(dataAtual).toLocaleString('pt-BR', { 
    weekday: 'long', 
    // day: 'numeric', 
    day: '2-digit',  
    month: 'long', 
    year: 'numeric' 
    // year: '2-digit' 
});

// Data Atual formato Franca extenso
let dataAtualFormatoFrancaExtenso = new Date(dataAtual).toLocaleString('fr-FR', { 
    weekday: 'long', 
    // day: 'numeric', 
    day: '2-digit',  
    month: 'long', 
    year: 'numeric' 
    // year: '2-digit' 
});

// Exibe a data no formato Brasil
console.log(`Formato Date sem tratamento: `, dataAtual);
console.log(`Formato timestamp: `, dataAtual.getTime(dataAtual));
console.log(`Formato UTC extenso: `, dataAtual.toUTCString());
console.log(`Formato pt-BR simplificado: `, dataAtualFormatoBrasil);
console.log(`Formato pt-BR extenso: `, dataAtualFormatoBrasilExtenso);
console.log(`Formato fr-FR extenso: `, dataAtualFormatoFrancaExtenso);
