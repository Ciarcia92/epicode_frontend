var leftArrow = document.getElementsByClassName('left-arrow');
var rightArrow = document.getElementsByClassName('right-arrow');
var playPause = document.getElementsByClassName('play-pause');
var cube = document.querySelectorAll('.cube');
var length = cube.length;

leftArrow[0].addEventListener('mouseover', function () {
  for (index = 0; index < length; index++) {
    cube[index].style.transform = 'rotateY(-30deg)';
  }
});
leftArrow[0].addEventListener('mouseout', function () {
  for (index = 0; index < length; index++) {
    cube[index].style.transform = 'rotateY(0deg)';
  }
});
leftArrow[0].addEventListener('click', function () {
  for (index = 0; index < length; index++) {
    cube[index].style.transform = 'rotateY(-90deg)';
  }
});
rightArrow[0].addEventListener('click', function () {
    for (index = 0; index < length; index++) {
        cube[index].style.transform = 'rotateY(90deg)';
    }
});
rightArrow[0].addEventListener('mouseover', function () {
  for (index = 0; index < length; index++) {
    cube[index].style.transform = 'rotateY(30deg)';
  }
});
rightArrow[0].addEventListener('mouseout', function () {
  for (index = 0; index < length; index++) {
    cube[index].style.transform = 'rotateY(0deg)';
  }
});
/*

playPause[0].addEventListener('click', function(){
    let angle = Number(cube[0].style.transform.replace(/\D/g, ''));
    for (index = 0; index < length; index++) {
      cube[index].style.transform = 'rotateY(' + (angle + 90) + 'deg)';
    }
});

*/