/*<var firstSubmenu = document.getElementsByClassName("submenu")[0];


/Это у ссылок бекграунд задан, поэтому бекграунда ли или ул просто нету
 // надо повесить событие когда хавер на сабменю, то цвет родителя родителя ссылки остается тот же 
  firstSubmenu.onmouseover = function(){
      var parent = firstSubmenu.parentElement;
      var firstLink = parent.children[0];
      //var firstLinkStyle = getComputedStyle(firstLink);РИДОНЛИ
      firstLink.classList.add("darkslategrey"); 
      
  }
  
firstSubmenu.onmouseout = function(){
    var parent = firstSubmenu.parentElement;
      var firstLink = parent.children[0];
      //var firstLinkStyle = getComputedStyle(firstLink);РИДОНЛИ
      firstLink.classList.remove("darkslategrey"); 
}
for (i=0; i<submenu.length;i++){
  submenu[i].addEventListener("mousemove", addClass);

  
}
function addClass(){
  this.parentElement.children[0].classList.add("darkslategrey");
}
*/




var submenu = document.getElementsByClassName("submenu");
for(i=0;i<submenu.length; i++){
    addClass(submenu[i]);
    removeClass(submenu[i]);
}
//можно было бы в цикле привязать событие к функции и без аргументов, а через this типа как тут li[i].addEventListener('click', addSign) ну или не ивет лисенер, не важно, ф-я теряла контекст, нужно было это исправить и все
function addClass(submenuItem){
    submenuItem.onmouseover = function() {
         submenuItem.parentElement.children[0].classList.add("color-blue");
        submenuItem.parentElement.children[0].children[0].classList.add("color-blue");
    }
}

function removeClass(submenuItem){
    submenuItem.onmouseout = function(){
        submenuItem.parentElement.children[0].classList.remove("color-blue");
        submenuItem.parentElement.children[0].children[0].classList.remove("color-blue");
    }
}


var favs = document.getElementsByClassName("fav-holder");
for (k=0; k<favs.length; k++){
  favs[k].addEventListener("click", changeColor);
}
function changeColor(){
  this.classList.toggle("fav-blue");
}

var squares = document.getElementsByClassName("square");
var arrowRight = document.getElementById("arrow-right");
var arrowLeft = document.getElementById("arrow-left");
var index = 1;
var slide = document.getElementById('slide');
arrowLeft.onclick = function(){
    index--;
    changeSlide();
};
arrowRight.onclick = function(){
    index++;
    changeSlide();
}
function changeSlide(){
    if(index<1){
        index= 4;
    }
    else if(index>4){
        index = 1;
    }
    for (var i = 0; i<squares.length; i++){
        squares[i].classList.remove("white");
    }
   slide.innerHTML = "Slide #"+index;
    squares[index-1].classList.add("white");
}