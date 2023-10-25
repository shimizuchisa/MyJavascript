'use strict'
{
const keep = document.getElementById('keep');
const dust= document.getElementById('dust');
const memo= document.getElementById('memo');
const message = document.getElementById('message');

if(localStorage.getItem('memo1') === null) {
  memo.value = "";
} else {
  memo.value = localStorage.getItem('memo1');
}

keep.addEventListener('click', () => {
  localStorage.setItem('memo1', memo.value);
  message.textContent = memo.value;
  message.classList.add('appear');
  setTimeout(() => {
    message.classList.remove('appear');
  }, 1000);
});


dust.addEventListener(('click') , () => {
  memo.value = "";
  localStorage.clearItem('memo');

});
}