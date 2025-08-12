// usuário quer ser avisado com 90, 60 e 30 dias de antecedencia do vencimento da carteira dele. Insere data de carteira, prazo de vencimento.

// Pega data de emissão da carteira
let dataEmissaoCNH = new Date('2025-07-28T12:00:00');

// Pega prazo de vencimento (5 ou 10 anos)
let prazoVencimento = 10;

// Pega data de vencimento da carteira
let dataVencimentoCNH = new Date(dataEmissaoCNH);
dataVencimentoCNH.setFullYear((dataEmissaoCNH.getFullYear() + prazoVencimento));
console.log('CNH emitida em: '.toUpperCase() + dataVencimentoCNH.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));

// Define alerta para 90 dias
let alerta90Dias = new Date(dataVencimentoCNH);
alerta90Dias.setDate((dataVencimentoCNH.getDate() - 90));
console.log('Alerta de 90 dias: '.toUpperCase() + alerta90Dias.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));

// Define alerta para 60 dias
let alerta60Dias = new Date(dataVencimentoCNH);
alerta60Dias.setDate((dataVencimentoCNH.getDate() - 60));
console.log('Alerta de 60 dias: '.toUpperCase() + alerta60Dias.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));

// Define alerta para 30 dias
let alerta30Dias = new Date(dataVencimentoCNH);
alerta30Dias.setDate((dataVencimentoCNH.getDate() - 30));
console.log('Alerta de 30 dias: '.toUpperCase() + alerta30Dias.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));