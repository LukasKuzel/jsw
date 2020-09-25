//var nadpis = 'Ahoj';
let nadpis = document.getElementById('nadpis');
const zapati = document.querySelector('footer');
let rida = document.querySelector('.jumbotron');
const fotka = document.querySelector('img');



nadpis.addEventListener('click', function(){
    console.log('Tohle je po kliknutí');
    nadpis.innerHTML = 'Konečně pátek!';
    nadpis.style.fontSize = '3em';
    nadpis.style.color = 'blue';
    nadpis.classList.add('bg-success');
    nadpis.classList.remove('text-center');
    nadpis.classList.add('text-right');
});

zapati.addEventListener('mouseover',function(){
    console.log('Tohle je po pohybu nad zápatím');
    zapati.style.fontSize = '10em';
    zapati.style.color = 'pink';
    zapati.style.backgroundColor = 'lightblue';
    zapati.style.text = 'strong';
    zapati.innerHTML = 'Menšík je imposter';
});

fotka.addEventListener('mouseenter',function(){
    console.log('myš na Trumpovi');
    fotka.src = 'img/trump1.jpg';
});

fotka.addEventListener('mouseleave',function(){
    console.log('myš na Trumpovi');
    fotka.src = 'img/trump2.jpg';
});