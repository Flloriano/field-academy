function pessoa() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // tirar o envio ao clicar no botão
    //     alert('Teste');

    //     console.log('Foi gravado!');
    //     }

    //let contador = 1;
    function cadPessoas (evento) {
        evento.preventDefault();
        //  console.log(`Formulario não enviado ${contador}`);
        //  contador++;

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML+=`<p>Nome: ${nome.value} ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}</p>`;

    }

    form.addEventListener('submit', cadPessoas);
}

pessoa()