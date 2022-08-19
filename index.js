
 let endereco = document.getElementById('valorCep').value;
    var btn = document.querySelector('#pesquisar');



    function buscarCep(){
        const URL = 'https://viacep.com.br/ws/'+`${endereco}`+'/json/'
        fetch(`${URL}`)
      .then((body) => body.json())
      .then((data) => {
        document.getElementById('resultado').innerHTML =  data.logradouro  + " CEP: "+ data.cep + " " + " Bairro: " + data.bairro + " Cidade: " + data.localidade + " " + "Estado: " + data.uf;
        console.log(data);
       
        btn.addEventListener('click', function () {
          location.reload();
        });
      })
      .catch((error) => console.error('Erro:', error.message || error))
    }
