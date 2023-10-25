'use strict'
{
  // const nums1 = document.querySelectorAll('.num1');
  // const numIndex = 0;

  function createColumn(col) {
    const source = [];
    for(let i = 0; i < 15; i++) {
      source[i] = i + 15 * col;
    }
    const column = [];
    for(let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  function createColumns() {
    const columns = [];
    for(let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = "free"
   return columns;
  }

  // function createBingo() {
  //   const bingo = [];
  //   for(let row = 0; row < 5; row++) {
  //     bingo[row] = [];
  //     for(let col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //   bingo[2][2] = 'FREE';
  //   return bingo;
  // }

  function renderBingo(columns) {
    for(let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for(let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);
  // }



  // window.addEventListener('load', function() {
  //   nums.forEach(num => {
  //     num.textContent = source.splice(Math.floor(Math.random() * source.length), 1);
  //   });
  // });
  // });

  // window.addEventListener('load', function() {
    // nums.forEach(num =>
    //   console.log(num)
    //   // num[numIndex] = Math.floor(Math.random() * source.length);
    //   // console.log(num[numIndex]);
    // );
  // });
  // window.addEventListener('load', function() {
  //   num.forEach((num) => {
  //     num.value = Math.floor(Math.random() * source.length);
  //   });
  // });
}