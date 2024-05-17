// Interagindo TypeScript com o DOM

// Obtém o elemento do DOM com o ID 'nome' e o armazena na variável campoNome
// Fazemos o casting para HTMLInputElement para acessar as propriedades específicas de um campo de entrada de texto
const campoNome = document.getElementById('nome') as HTMLInputElement | null;

// Obtém todos os elementos <form> do DOM e os armazena na variável formulario
const formulario = document.getElementsByTagName('form');

// Obtém o elemento do DOM com o ID 'btn-enviar' e o armazena na variável botao
const botao = document.getElementById('btn-enviar');

// Adiciona um ouvinte de eventos de clique ao botão, se ele existir
botao?.addEventListener('click', (e: MouseEvent) => {
    // Previne o comportamento padrão do botão, se estiver dentro de um formulário
    e.preventDefault();

    // Verifica se o campoNome existe
    if (campoNome) {
        // Obtém o valor do campo de texto
        const nome = campoNome.value;

        // Exibe o valor no console
        console.log(`Nome: ${nome}`);

        // Exibe uma mensagem de alerta com o valor do nome
        alert(`O nome digitado é: ${nome}`);
    }
});

