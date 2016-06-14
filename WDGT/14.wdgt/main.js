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

    tl.staggerFrom(".os", 2, {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5)
    .staggerFrom(".str", 0.5 , {
      transformOrigin: '0 100%',
      scaleY: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5, 0.3)
    .staggerFrom(".strx", 0.5 , {
      transformOrigin: '0 0',
      scaleX: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5, 1.2)
    .staggerFrom(".st", 0.75 , {
      transformOrigin: '0 100%',
      scaleY: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5, 0.8)
    .to("#curve", 3, {
      clip:"rect(0px,1200px,960px,0px)",
      ease:Linear.easeNone
    }, 0.5, 0.8)
    .staggerFrom(".shtrih", 0.75 , {
      transformOrigin: '0 0',
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5, 0.8)
    .staggerFrom(".txt", 0.75 , {
      scale: 0.5,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.25, 1.2)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
