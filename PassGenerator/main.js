'use strict'
{
  // スライダーの数値を取得
  const slider = document.getElementById('slider');
  slider.addEventListener('input', () =>{
    const passwordLength = document.getElementById('password-length');
    passwordLength.textContent = slider.value;
  });

  // パスワード表示の関数
  function showPassword() {
    const seeds ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="0123456789";
    const signs = "!#$%&¥@=~*";
    let letters = seeds;
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const signsCheckbox = document.getElementById('signs-checkbox');
    if(numbersCheckbox.checked === true && signsCheckbox.checked === true) {
      letters = seeds + numbers + signs;
    } else if (numbersCheckbox.checked === true) {
      letters = seeds + numbers;
    } else if (signsCheckbox.checked === true) {
      letters = seeds + signs;
    } else {
      letters = seeds;
    }

    const result = document.getElementById('result');
    let password = "";

    for(let i=0; i<slider.value; i++) {
      password = password + letters[Math.floor(Math.random() * letters.length)];
    }
    result.textContent = password;
  }
  // ボタン押下　→　パスワード表示関数の発動
  document.getElementById('btn').addEventListener('click', () => {
    showPassword();
  });
  // 最初からパスワードを表示する
  showPassword();
}