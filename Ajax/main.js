//document.addEventListener('DOMContentLoaded', function() {
//    document.getElementById('buscar').addEventListener('click', function() {
//        const cep = document.getElementById('cep').value;
//        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

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

$(document).ready(function() {
    $('#cep').mask('00000-000');
    $('#buscar').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        
        $(this).find('i').addClass('d-none');
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

//        $.ajax(endpoint).done(function(resposta) {
//            const logradouro = resposta.logradouro;
//            const bairro = resposta.bairro;
//            const localidade = resposta.localidade; 
//            const estado = resposta.uf;
//            const endereco = `${logradouro}, ${bairro} - ${localidade} - ${estado}`;
//            $('#endereco').val(endereco);

//            setTimeout(function() {
//                $(botao).find('i').removeClass('d-none');
//                $(botao).find('span').addClass('d-none');
//            }, 1000);
//        })
//    })
//})


