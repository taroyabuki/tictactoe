//クリック数を数えて○×を判断する。
var クリック数 = 0;

function クリックへの反応(位置) {
  クリック数++;
  if (クリック数 % 2 == 1) {
    $('#セル' + 位置).addClass('○');
  } else {
    $('#セル' + 位置).addClass('×');
  }
}

/*
//手番（先手：1，後手-1）だけを記憶する。
var 手番 = 1;

function クリックへの反応(位置) {
  if (手番 == 1) {
    $('#セル' + 位置).addClass('○');
  } else {
    $('#セル' + 位置).addClass('×');
  }
  手番 = -手番;
}
*/

/*
//「次」は何にするかを記憶しておく。
var 次 = '○';

function クリックへの反応(位置) {
  $('#セル' + 位置).addClass(次);
  if (次 == '○') {
    次 = '×';
  } else {
    次 = '○';
  }
}
*/

/*
//○と×の数を比較して○×を判断する。
function クリックへの反応(位置) {
  var マルの数 = $('.○').length;
  var バツの数 = $('.×').length;
  if (マルの数 == バツの数) {
    $('#セル' + 位置).addClass('○');
  } else {
    $('#セル' + 位置).addClass('×');
  }
}
*/
