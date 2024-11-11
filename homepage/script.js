const scrollers = document.querySelectorAll(".scroller");
var today = new Date();
var time = today.getHours();
var greet;

if (time > 18) {
  greet = '‎ Night';
} else if (time > 12) {
  greet = '‎  Afternoon';
} else if (time >= 0) {
  greet = '‎ Morning';
} else {
  greet = 'Broken!';
}

var show = document.getElementById('timed');
show.textContent = greet;

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })

  const audio = document.getElementById("audio");

  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");
  playButton.style.display = "none";
  let isPlaying = false;

  playButton.addEventListener("click", () => {
      if (isPlaying) {
          audio.pause();
      }
      playButton.style.display = "none";
      pauseButton.style.display = "inline";
      isPlaying = !isPlaying;
  });

  pauseButton.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
    }
    pauseButton.style.display = "none";
    playButton.style.display = "inline";
    isPlaying = !isPlaying;
});

audio.onloadmetadata = function(){
  progress.max = audio.duration;
  progress.value = audio.currentTime;
}
if(audio.play()){
    setInterval(()=>{
      progress.value = audio.currentTime;
    },500);
}

progress.onchange = function(){
  audio.play();
  audio.currentTime = progress.value;
}

const moveButtonR = document.getElementById("arrowR");
const moveButtonL = document.getElementById("arrowL");
moveButtonR.addEventListener("click", () => {
  document.getElementById("mizupic").style.transition=" all 2s" 
  document.getElementById("mizupic").style.transform="translateX(-800px)";
  document.getElementById("thornpic").style.transform="translateX(980px)"; 
  document.getElementById("thornpic").style.transition=" all 2s" 
});

moveButtonL.addEventListener("click", () => {
  document.getElementById("mizupic").style.transition=" all 2s" 
  document.getElementById("mizupic").style.transform="translateX(980px)";
  document.getElementById("thornpic").style.transform="translateX(2000px)"; 
  document.getElementById("thornpic").style.transition=" all 2s"
});