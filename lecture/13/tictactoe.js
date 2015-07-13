var クリック数 = 0;
var 盤面 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var セル数 = 盤面.length;

var 筋の配列 = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]];
var 筋の数 = 筋の配列.length;

function 画面を更新する() {
  for (var i = 0; i < 筋の数; ++i) {
    var 結果 = そろったか(筋の配列[i]);
    if (結果 !== 0) {
      $('div').addClass('終');
      筋に勝印を付ける(筋の配列[i]);
    }
  }
}

function 人が一手進める(位置) {
  盤面[位置] = 人;
  if (人 == 1) {
    $('#セル' + 位置).addClass('○');
  } else {
    $('#セル' + 位置).addClass('×');
  }
  画面を更新する();
  COMが一手進める();
}

function COMが一手進める() {
  if (盤面.indexOf(0) === -1) {
    return;
  }
  if ($('.終').length !== 0) {
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
  画面を更新する();
}

function そろったか(筋) {//筋 = [3, 4, 5]だったら
  var a = 筋[0];//aは3になる
  var b = 筋[1];//bは4になる
  var c = 筋[2];//cは5になる
  if (盤面[a] == 1 && 盤面[b] == 1 && 盤面[c] == 1) {
    return 1;
  }
  if (盤面[a] == -1 && 盤面[b] == -1 && 盤面[c] == -1) {
    return -1;
  }
  return 0;
}

function 筋に勝印を付ける(筋) {
  $('#セル' + 筋[0]).addClass('勝');
  $('#セル' + 筋[1]).addClass('勝');
  $('#セル' + 筋[2]).addClass('勝');
}

var 人 = 1;//先手ということ
var COM = -1;//後手ということ

$(window.document).ready(function() {//初期設定
  if (Math.random() < 0.5) {//50%の確率でCOMを先手にする
    人 = -1;
    COM = 1;
    COMが一手進める();
  }
});
