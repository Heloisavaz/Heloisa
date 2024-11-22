// // função para somar dois numeros 
// function adicionar(a,b) {
//     return a + b;
// }
// //função para calcular o dobro do número
// function calcularDobro(valor) {
//     return valor * 2;
// }

// //TESTE DE INTEGRAÇÃO
// describe("Teste de integração", function() {
//     it("deve somar dois números e calcular o dobro", function() {
//         const resultadoSoma = adicionar(2,3);
//         const resultadoDobro = calcularDobro (resultadoSoma);
//         //verfica se o dobro está correto
//         expect(resultadoDobro).toBe(10);
//     });
//     it("Deve calcular o dobro mesmo com números negativos", function(){
//         const resultadoSoma = adicionar(-2, -3);
//         const resultadoDobro = calcularDobro(resultadoSoma);
//         expect(resultadoDobro).toBe(-10);
//     });
// });

// //função para concatear duas partes de texto
// function concatenarTexto(parte1, parte2) {
//     return parte1 + ' ' + parte2;
// }
// //função para deixar os textos maíusculos
// function converter(texto){
//     return texto.toUpperCase();
// }
// //TESTE
// describe("Segundo teste de integração", function(){
//     it("Deve juntar dois textos e deixar maíusculo", function() {
//         const texto = concatenarTexto("tudo", "bem");
//         const textoMaiusculo = converter(texto);
//         //verifica se deu certo
//         expect(textoMaiusculo).toBe("TUDO BEM");
//     });
//     it("Deve lidar com Strind vazia", function() {
//         const texto = concatenarTexto("", "teste");
//         const textoMaiusculo = converter(texto);
//         expect(textoMaiusculo).toBe(" TESTE");
//     });
// });








// // Funções para calcular a soma e a média
// function somarNotas(nota1, nota2, nota3, nota4) {
//     return nota1 + nota2 + nota3 + nota4;
//   }
  
//   function calcularMedia(soma, quantidade) {
//     const media = soma / quantidade;
//     return media >= 6 ? 'Aprovado' : 'Reprovado';
//   }
  
//   // Testes utilizando Jest
//   const { describe, it, expect } = require('@jest/globals');
  
//   describe('Calculadora de Notas', () => {
//     it('deve somar quatro notas corretamente', () => {
//       const resultado = somarNotas(7, 8, 9, 10);
//       expect(resultado).toBe(34);
//     });
  
//     it('deve calcular a média e indicar aprovação', () => {
//       const soma = 28;
//       const quantidade = 4;
//       const resultado = calcularMedia(soma, quantidade);
//       expect(resultado).toBe('Aprovado');
//     });
  
//     it('deve calcular a média e indicar reprovação', () => {
//       const soma = 20;
//       const quantidade = 4;
//       const resultado = calcularMedia(soma, quantidade);
//       expect(resultado).toBe('Reprovado');
//     });
//   });




//   // Funções para multiplicar e calcular o triplo
// function multiplicar(a, b) {
//     return a * b;
//   }
  
//   function calcularTriplo(valor) {
//     return multiplicar(valor, 3);
//   }
  
//   describe('Calculadora de Triplo', () => {
//     it('deve calcular o triplo de um número positivo', () => {
//       const resultado = calcularTriplo(5);
//       expect(resultado).toBe(15);
//     });
  
//     it('deve calcular o triplo de um número negativo', () => {
//       const resultado = calcularTriplo(-3);
//       expect(resultado).toBe(-9);
//     });
  
//     it('deve calcular o triplo do resultado da multiplicação de dois números positivos', () => {
//       const produto = multiplicar(2, 4);
//       const resultado = calcularTriplo(produto);
//       expect(resultado).toBe(24);
//     });
  
//     it('deve calcular o triplo do resultado da multiplicação de dois números negativos', () => {
//       const produto = multiplicar(-2, -3);
//       const resultado = calcularTriplo(produto);
//       expect(resultado).toBe(18);
//     });
  
//     it('deve calcular o triplo do resultado da multiplicação de um número positivo e um negativo', () => {
//       const produto = multiplicar(2, -4);
//       const resultado = calcularTriplo(produto);
//       expect(resultado).toBe(-24);
//     });
//   });


// Calcular desconto 
// Função para calcular o desconto
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return valorTotal * 0.05;
    } else if (valorTotal <= 500) {
        return valorTotal * 0.10;
    } else {
        return valorTotal * 0.15;
    }
}

// Função para aplicar o desconto ao valor total
function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - desconto;
}

// TESTE DE INTEGRAÇÃO
describe("Teste de integração - Cálculo de Desconto", function() {
    it("Deve aplicar um desconto de 5% para compras até R$ 100", function() {
        const valorTotal = 100;
        const desconto = calcularDesconto(valorTotal);
        const valorComDesconto = aplicarDesconto(valorTotal, desconto);
        // Verifica se o valor com desconto está correto
        expect(valorComDesconto).toBe(95);
    });

    it("Deve aplicar um desconto de 10% para compras entre R$ 101 e R$ 500", function() {
        const valorTotal = 300;
        const desconto = calcularDesconto(valorTotal);
        const valorComDesconto = aplicarDesconto(valorTotal, desconto);
        // Verifica se o valor com desconto está correto
        expect(valorComDesconto).toBe(270);
    });

    it("Deve aplicar um desconto de 15% para compras acima de R$ 500", function() {
        const valorTotal = 1000;
        const desconto = calcularDesconto(valorTotal);
        const valorComDesconto = aplicarDesconto(valorTotal, desconto);
        // Verifica se o valor com desconto está correto
        expect(valorComDesconto).toBe(850);
    });
});






