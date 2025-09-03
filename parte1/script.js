function calcularJurosCompostos(capitalInicial, taxaJuros, periodoMeses) {
  // Converter taxa para decimal
  let taxa = taxaJuros / 100;

  // Fórmula do montante final
  let montante = capitalInicial * Math.pow((1 + taxa), periodoMeses);

  return montante.toFixed(2); // Retorna com 2 casas decimais
}

// Exemplo de uso:
console.log(calcularJurosCompostos(1000, 1.5, 12)); 
// Investindo R$1000 a 1,5% ao mês durante 12 meses
