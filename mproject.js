let continuar = true;

while (continuar) {
  let opcao = prompt(`Escolha uma operação:
  1 - Soma
  2 - Subtração
  3 - Multiplicação
  4 - Divisão
  5 - Sair`);

  let num1, num2, resultado;

  switch (opcao) {
    case "1":
      num1 = Number(prompt("Digite o primeiro número:"));
      num2 = Number(prompt("Digite o segundo número:"));
      resultado = num1 + num2;
      console.log("Resultado da soma: " + resultado);
      break;

    case "2":
    num1 = Number(prompt("Digite o primeiro número:"));
      num2 = Number(prompt("Digite o segundo número:"));
      resultado = num1 + num2;
      console.log("Resultado da soma: " + resultado);
      break;

    case "3":
      num1 = Number(prompt("Digite o primeiro número:"));
      num2 = Number(prompt("Digite o segundo número:"));
      resultado = num1 + num2;
      console.log("Resultado da soma: " + resultado);
      break;

    case "4":
      num1 = Number(prompt("Digite o primeiro número:"));
      num2 = Number(prompt("Digite o segundo número:"));
      if (num2 === 0) {
        console.log("Erro: divisão por zero!");
      } else {
        resultado = num1 / num2;
        console.log("Resultado da divisão: " + resultado);
      }
      break;

    case "5":
      continuar = false;
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida");
  }
}
