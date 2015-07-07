var クリック数 = 0;
var 盤面 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var セル数 = 盤面.length;

var 筋の配列 = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var 筋の数 = 筋の配列.length;

var 人 = 1;//先手ということ
var COM = -1;//後手ということ

function 人が一手進める(位置) {
  盤面[位置] = 人;
  if (人 == 1) {
    $('#セル' + 位置).addClass('○');
  } else {
    $('#セル' + 位置).addClass('×');
  }
  そろった場所を目立たせる();
  COMが一手進める();
}

function COMが一手進める() {
  if (盤面.indexOf(0) == -1) {
    return;
  }
  while (true) {
    var 位置 = Math.floor(Math.random() * セル数);
    if (盤面[位置] === 0) {//埋められるまで繰り返す
      盤面[位置] = COM;
      if (COM == 1) {
        $('#セル' + 位置).addClass('○');
      } else {
        $('#セル' + 位置).addClass('×');
      }
      break;
    }
  }
  そろった場所を目立たせる();
}

function そろった場所を目立たせる() {
  for (var i = 0; i < 筋の数; ++i) {
    var 結果 = そろったか(筋の配列[i]);
    if (結果 !== 0) {
      $('div').addClass('終');
      筋に勝印を付ける(筋の配列[i]);
    }
  }
}

function そろったか(筋) {
  var a = 盤面[筋[0]];
  var b = 盤面[筋[1]];
  var c = 盤面[筋[2]];
  if (a == 1 && b == 1 && c == 1) {
    return 1;//○がそろった
  }
  else if (a == -1 && b == -1 && c == -1) {
    return -1;//×がそろった
  }
  return 0;//そろっていない
}

function 筋に勝印を付ける(筋) {
  $('#セル' + 筋[0]).addClass('勝');
  $('#セル' + 筋[1]).addClass('勝');
  $('#セル' + 筋[2]).addClass('勝');
}
