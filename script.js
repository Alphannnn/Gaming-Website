const nextBtn = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4' , 'videos/hero-2.mp4' , 'videos/hero-3.mp4' , 'videos/hero-4.mp4'];

let index = 0;

nextBtn.addEventListener('click' , function(){
    index+=1;
    video.src = movieList[index];

    if(index == 3){
        index = -1;
    }
})

 window.addEventListener("keydown", function (event) {
    const keys = ["ArrowDown", "ArrowUp"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();

    const direction = event.key === "ArrowDown" ? 1 : -1;
    const scrollAmount = 200;  
    const duration = 1000;  

    const start = window.scrollY;
    const end = start + direction * scrollAmount;
    const startTime = performance.now();

    function easeOutQuad(t) {
      return t * (2 - t); // smoother ease out
    }

    function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      window.scrollTo(0, start + (end - start) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });