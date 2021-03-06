var クリック数 = 0;
var 盤面 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
  クリック数++;
  if (クリック数 % 2 == 1) {
    $('#セル' + 位置).addClass('○');
    盤面[位置] = 1;
  } else {
    $('#セル' + 位置).addClass('×');
    盤面[位置] = -1;
  }
  console.log(盤面);
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
