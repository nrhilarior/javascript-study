let opcao;

while (opcao !== "4") {
  opcao = prompt(`Escolha uma opção:
  1 - Contar de 1 a 5 (for)
  2 - Contar de 5 a 1 (while)
  3 - Verificar par ou ímpar (if/else)
  4 - Sair`);

  switch (opcao) {
    case "1":
      for (let i = 1; i <= 5; i++) {
        console.log(i);
      }
      break;

    case "2":
      let i = 5;
      while (i >= 1) {
        console.log(i);
        i--;
      }
      break;

    case "3":
      let numero = Number(prompt("Digite um número:"));
      if (numero % 2 === 0) {
        console.log("É par");
      } else {
        console.log("É ímpar");
      }
      break;

    case "4":
      console.log("Encerrando...");
      break;

    default:
      console.log("Opção inválida");
  }
}
