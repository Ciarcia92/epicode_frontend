var nav = document.getElementById('nav');
var grande = document.getElementById('grande');
var colore = document.getElementById('colore');
var maiuscolo = document.getElementById('maiusc');
var nascondi = document.getElementById('hide');
var mostrare = document.getElementById('show');
var titolo = document.getElementById('title');
var list = document.getElementsByClassName('list');

function showHide() {
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

grande.addEventListener('click', function () {
  if (titolo.style.fontSize === '4em') {
    titolo.style.fontSize = '6em';
  } else {
    titolo.style.fontSize = '4em';
  }
});
colore.addEventListener('click', function () {
  if (titolo.style.color === 'red') {
    titolo.style.color = 'green';
  } else {
    titolo.style.color = 'red';
  }
});

  nascondi.addEventListener('click', function(){
    titolo.style.visibility = 'hidden'
});

  mostrare.addEventListener('click', function(){
    titolo.style.visibility = 'visible'
}); 

maiuscolo.addEventListener('click', function () {
    if (titolo.style.textTransform === 'none') {
      titolo.style.textTransform = 'uppercase';
    } else {
      titolo.style.textTransform = 'none';
    }
 }); 
 /*
var ul = document.getElementById('lista');
var lista = ul.children;

lista.onmouseover() => {changeColor()}

function changeColor() {
    lista.style.color = 'red';
}
*/

var  list = document.querySelectorAll('.list');

for(i = 0; i<list.length; i++) {
    list[i].addEventListener('mouseover', function() {
        this.className += ' listHover';
    });
    list[i].addEventListener('mouseout', function() {
        this.classList.remove('listHover');
    }); 
    list[i].addEventListener('click', function() {
        this.classList.toggle('listClick');
    });
    

}