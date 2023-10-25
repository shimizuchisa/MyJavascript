'use strict'
{
  const mainImg = document.getElementById('main-img');
  const btnLeft = document.getElementById('btn-left');
  const btnRight = document.getElementById('btn-right');
  const thumbnails = document.querySelectorAll('.thumbnail');
  let activeIndex = 0;

  thumbnails[1].addEventListener('click', () => {
    mainImg.src = thumbnails[1].src;
    thumbnails[1].classList.add('active');
  });

  btnRight.addEventListener('click', () => {

    activeIndex++;
    if (activeIndex > thumbnails.length - 1) {
      activeIndex = 0;
    }
    mainImg.src = thumbnails[activeIndex].src;
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });
    thumbnails[activeIndex].classList.add('active');
  });

  btnLeft.addEventListener('click', () => {
    activeIndex--;
    if(activeIndex < 0) {
      activeIndex = 2;
    }
    mainImg.src = thumbnails[activeIndex].src;
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });
    thumbnails[activeIndex].classList.add('active');
  });

}