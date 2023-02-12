const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');
paragrafo.classList.add('backgroundcolor')

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}