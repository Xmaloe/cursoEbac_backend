    // Função síncrona que realiza muitas execuções (simulando uma função pesada)
//    function funcao() {
//        let execucoes = 0;
//        for (let i = 0; i < 1000000000; i++) {
//            execucoes++;
//        }
//        return execucoes;
//    }

    // Criando uma Promise para a função pesada
//Promessa que será resolvida com (resolve), em caso de erro catch avisará com (reject)
    const funcaoPromise = new Promise((resolve, reject) => {
        try {
            let execucoes = 0;
            for (let i = 0; i < 1000000000; i++) {
                execucoes++;
            }
            resolve(execucoes);
        } catch(e) {
            reject('Deu erro na iteração dos números');
        }
    });

    // Função assíncrona com parâmetros usando Promise
    const promiseComParametros = (login, senha) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Logado com o usuário: ${login}`);
            }, 3000);
        });
    };

    // Função principal assíncrona
    async function execucaoPrincipal() {
        console.log("Inicio");
        // Executando a função assíncrona com parâmetros usando Promise
        promiseComParametros('karenmoraes@gmail.com', 123456).then(resultado => {
            console.log(resultado);
        });
        try {
            // await que epera esse resultado sair para outras funções darem continuidade
            const resultado = await funcaoPromise;
            console.log(resultado);
        } catch(e) {
            console.log(e);
        }
        console.log("Fim");
    }
    execucaoPrincipal();
