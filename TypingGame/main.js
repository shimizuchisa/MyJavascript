'use strict'
{
  const words = [
    'red',
    'blue',
    'pink',
    ];

  const target = document.getElementById('target');
  const restart = document.getElementById('restart');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    setWord();
    startTime = Date.now();
  });

  restart.addEventListener('click', () => {
    document.getElementById('restart').classList.add('disappear');
    setWord();
    startTime = Date.now();
  });

  let word
  let location = 0;
  let startTime = 0;
  let isPlaying = false;

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    location = 0;
  }

  document.addEventListener('keydown', e => {
    if(e.key ==! word[location]) {
      return;
    }
    location++;
    target.textContent = '_'.repeat(location) + word.substring(location);

    if(location === word.length) {
      if(words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById('result').textContent = `Finished! ${elapsedTime} seconds!`;
        restart.classList.remove('disappear');
      }
      setWord();
    }
  });

  if(location === word.length && words.length === 0) {
    isPlaying = false;
  }

}