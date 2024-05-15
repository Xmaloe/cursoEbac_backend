//AJAX - Asynchronous JavaScript and XML (Interação entre back e front sem regarregar a página)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//document.addEventListener('DOMContentLoaded', function() {
//    document.getElementById('buscar').addEventListener('click', function() {
//        const xhttp = new XMLHttpRequest();
//        const cep = document.getElementById('cep').value;
//        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//        xhttp.open(`GET´, endpoint);
//        xhttp.send();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//        fetch(endpoint)
//            .then(response => {
//                if (!response.ok) {
//                    throw new Error(`Erro na requisição: ${response.status}`);
//               }
//                return response.json();
//            })
//    });
//});
//        })
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function() {
    $('#cep').mask('00000-000');
    $('#buscar').click(function() {
        const cep = $('#cep').val(); //val= receber valor no vazio
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        
        $(this).find('i').addClass('d-none'); // faz a junção do icone de busca 
        $(this).find('span').removeClass('d-none');

        fetch(endpoint)
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const localidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${localidade} - ${estado}`;
                $('#endereco').val(endereco);
            })
            .catch(function() {
                alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.");
            })
            .finally(function() {
                setTimeout(function() {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 1000);
            });
    });

    $('#formulario').submit(function(event) {
        event.preventDefault();
        if ($('#nome').val().length == 0) {
            throw new Error('Digite o nome');
        }
    })
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//        $.ajax(endpoint).done(function(resposta) {
//            const logradouro = resposta.logradouro;
//            const bairro = resposta.bairro;
//            const localidade = resposta.localidade; 
//            const estado = resposta.uf;
//            const endereco = `${logradouro}, ${bairro} - ${localidade} - ${estado}`;
//            $('#endereco').val(endereco); // valor que será inserido automaticamente no campo 

//            setTimeout(function() {
//                $(botao).find('i').removeClass('d-none');
//                $(botao).find('span').addClass('d-none');
//            }, 1000);
//        })
//    })
//})

//O código 'fetch(endpoint).then(function(resposta) { return resposta.json(); })' é como ir à biblioteca pedir um livro específico 
//(usando 'fetch' com um 'endpoint' é como pedir o livro pelo título). Quando a bibliotecária lhe entrega o livro ('then'), você o abre e começa a 
//traduzir seu conteúdo de uma língua estrangeira para o seu idioma ('resposta.json()'), para poder entender e usar as informações contidas nele.



