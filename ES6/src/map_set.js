    // Criando um novo Map
    let meuMap = new Map();

    // Adicionando valores ao Map
    meuMap.set("nome", "gian");
    meuMap.set("stack", "html, css, js");

    // Imprimindo o Map no console
    console.log(meuMap);

    // Obtendo o valor associado à chave "nome"
    const nome = meuMap.get("nome");

    // Imprimindo o valor associado à chave "nome"
    console.log(nome);

    // Imprimindo o tamanho do Map
    console.log(meuMap.size);

    // Verificando se o Map contém a chave "sobrenome"
    console.log(meuMap.has("sobrenome"));

    // Limpando o Map (comentado)
    // meuMap.clear();

    // Imprimindo o tamanho do Map após a limpeza
    console.log(meuMap.size);

    // Iterando sobre as chaves do Map
    for (let chave of meuMap.keys()) {
        console.log(chave);
    }

    // Iterando sobre os valores do Map
    for (let valor of meuMap.values()) {
        console.log(valor);
    }

    // Iterando sobre as entradas (chave-valor) do Map
    for (let [chave, valor] of meuMap.entries()) {
        console.log(`${chave}: ${valor}`);
    }

    // Removendo um item do Map pela chave "stack"
    meuMap.delete("stack");

    // Imprimindo o Map após a remoção
    console.log(meuMap);

    // Criando um novo Set para armazenar CPFs
    const cpfs = new Set();

    // Adicionando CPFs ao Set
    cpfs.add('92811369023');
    cpfs.add('01957537043');
    cpfs.add('59654996049');

    // Imprimindo o Set de CPFs
    console.log(cpfs);

    // Não existem métodos .keys() e .values() em Set, então estes retornam o próprio Set
    console.log(cpfs.keys());
    console.log(cpfs.values());

    // Iterando sobre os valores do Set usando forEach
    cpfs.forEach((valor) => {
        console.log(valor);
    });

    // Criando um array com itens duplicados
    const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];

    // Convertendo o array em um Set para remover itens duplicados
    const arrayComoSet = new Set([...array]);

    // Convertendo o Set de volta para um array
    const arraySemItensDuplicados = [...arrayComoSet];

    // Imprimindo o Set e o array sem itens duplicados
    console.log(arrayComoSet);
    console.log(arraySemItensDuplicados);
