    // Criando uma Promise para a função pesada
    //Promessa que será resolvida com (resolve), em caso de erro catch avisará com (reject)
    let funcaoNumero = new Promise(function (resolve, reject) {
        try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
        } catch (e) {
        reject('Deu erro na iteração dos números');
        }
    });
    
    let Users = function Users(login) {
        return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`);
        }, 2000);
        });
    };
    
    async function execucaoPrincipal() {
        console.log("Inicio");
    
        try {
            const loginResult = await Users('karenmoraes@gmail.com');
            console.log(loginResult);
    
            const resultado = await funcaoNumero;
            console.log(resultado);
        } catch (e) {
            console.log(error);
        }
        console.log("Fim");
    }
    
    execucaoPrincipal();
    //---------------------------------------------------------------------------------------------------------------------
    // function execucaoPrincipal() {
    //   return _execucaoPrincipal.apply(this, arguments);
    // }
    // function _execucaoPrincipal() {
    //   _execucaoPrincipal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    //     var resultado;
    //     return _regeneratorRuntime().wrap(function _callee$(_context) {
    //       while (1) switch (_context.prev = _context.next) {
    //         case 0:
    //           console.log("Inicio");
    
    //           Users('karenmoraes@gmail.com', 123456).then(function (resultado) {
    //             console.log(resultado);
    //           });
    //           _context.prev = 2;
    //           _context.next = 5;
    //           return funcaoPromise;
    //         case 5:
    //           resultado = _context.sent;
    //           console.log(resultado);
    //           _context.next = 12;
    //           break;
    //         case 9:
    //           _context.prev = 9;
    //           _context.t0 = _context["catch"](2);
    //           console.log(_context.t0);
    //         case 12:
    //           console.log("Fim");
    //         case 13:
    //         case "end":
        //           return _context.stop();
        //       }
        //     }, _callee, null, [[2, 9]]);
        //   }));
        //   return _execucaoPrincipal.apply(this, arguments);
        // }
        // execucaoPrincipal();
        
        //Explicação: 
        
        // O uso de then faz com que Users seja processado de forma assíncrona, e o código continua sem esperar seu resultado.
        // Versão refatorada: O uso de await assegura que o código aguarde a resolução da Promise antes de continuar, garantindo uma execução sequencial.
        
        
        // Embora funcional, este padrão é desnecessariamente complexo quando você pode simplesmente usar await dentro de um bloco try/catch.
        // await funcaoNumero.then(resultado => console.log(resultado)).catch(erro => console.log(erro))