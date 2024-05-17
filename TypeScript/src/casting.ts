
// Namespace "casting"
namespace casting {
    // Define uma variável "idade" do tipo "any" e atribui o valor 25
    let idade: any = 25;
    // Realiza um casting da variável "idade" para o tipo "number" usando "as"
    // Em seguida, chama o método "toFixed()", que está disponível para números
    (idade as number).toFixed();
}

// Define uma variável "nome" do tipo "string" e tenta fazer um casting de um número (35) para string
// O primeiro "as unknown" faz um casting para "unknown" e o segundo "as string" faz um casting para "string"
let nome: string = 35 as unknown as string; // transforma tipo number em string