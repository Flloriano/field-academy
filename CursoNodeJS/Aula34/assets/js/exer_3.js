
const pessoa = [
    {tag:'p', nome:'Elias Floriano'},
    {tag:'p', nome:'Emanuel Souza'},
    {tag:'p', nome:'Gael Souza'},
    {tag:'p', nome:'Mateus Souza'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(i=0; i < pessoa.length; i++){
    const {tag, nome} = pessoa[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = nome;
    div.appendChild(tagCriada);

}

    container.appendChild(div);

