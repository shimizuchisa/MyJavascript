'use strict'
{
  function check() {
// 残り時間 = 終了時刻 - 現在時刻
    let countdown = endTime - new Date().getTime();
    let sec;
    let min;

    // (3) タイマーの終了
    if(countdown < 0) {
      clearInterval(intervalID);
      countdown = 3 * 1000;
      btn.disabled = false;
      btn.classList.remove('inactive');
    }

    min = String(Math.floor(countdown / 1000 / 60)).padStart(2, '0');
    sec = String(Math.floor(countdown % 60000 / 1000)).padStart(2, '0');;

    timer.textContent = `${min}:${sec}`;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalID;

    // (1) 終了時刻を求める
  btn.addEventListener('click', () => {
    // タイマー稼働中はボタンを押せないようにする
    btn.disabled = true;
    btn.classList.add('inactive');
    endTime = new Date().getTime() + 3 * 1000;

// (2) 残り時間を求める
    intervalID = setInterval(check, 100);
  });
}