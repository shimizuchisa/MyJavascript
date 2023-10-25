'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    //   result.textContent = 'hit!';
    const results =['大吉', '小吉', '凶'];
    const omikuji = Math.floor(Math.random() * results.length);

    result.textContent = results[omikuji];

    // switch (omikuji) {
    //     case 0:
    //         result.textContent = '大吉';
    //         break;
    //     case 1:
    //         result.textContent = '小吉';
    //         break;
    //     case 2:
    //         result.textContent = '凶';
    //         break;
    // }
  });


}