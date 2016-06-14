var tl = new TimelineMax();

var wraper = document.querySelector("#wraper");

function shaker (){
  wraper.className = "animated05 shake";
  setTimeout(function(){
    wraper.className = "";
  },1000);
}
var shakerInt = setInterval(shaker, 3000);

var clicked = true;
function animation (e){
  if (clicked){
    clearInterval(shakerInt);
    TweenMax.to( wraper, 1,{
      autoAlpha: 0,
    });

    clicked = false;

    tl.staggerFrom(".c", 1, {
      y: '-=100',
      autoAlpha: 0,
      transformOrigin: '0 0',
      ease: Back.easeOut
    }, 0.35)
    .staggerFrom(".st", 0.75 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.45, 0.3)
    .staggerFrom(".st2", 0.75 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.15, 2.3)
    .staggerFrom(".c2", 1 , {
      scale: 0.5,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.25, 3.2)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
