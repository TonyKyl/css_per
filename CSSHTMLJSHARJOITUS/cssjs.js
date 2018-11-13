document.getElementById("berry").style.backgroundColor = 'red';
console.log('I found the berry: Strawberry');

document.querySelector("[data-foodtype = squishy]").style.backgroundColor = 'orange';
console.log('I found the fruit: Orange');

const lista = document.getElementsByTagName('li');
console.log(lista);


let i;
for (i = 0; i < lista.length; i++) {
  lista[i].style.width = '100px';
  lista[i].style.listStyleType = 'none';
  lista[3].style.backgroundColor = 'green';
  
}


const palautus = document.querySelectorAll('li');
console.log(palautus);








