var クリック数 = 0;
var 盤面 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function クリックへの反応(位置) {
  クリック数++;
  if (クリック数 % 2 == 1) {
    $('#セル' + 位置).addClass('○');
    盤面[位置] = 1;
  } else {
    $('#セル' + 位置).addClass('×');
    盤面[位置] = -1;
  }
  console.log(盤面);

  var 結果 = そろったか();
  console.log('そろった：' + 結果);

  if (結果 == 1) {
    $('div').addClass('終');
    $('#セル0').addClass('勝');
    $('#セル1').addClass('勝');
    $('#セル2').addClass('勝');
  }
}

function そろったか() {
  if (盤面[0] == 1 && 盤面[1] == 1 && 盤面[2] == 1) {
    return 1;
  }
  return 0;
}
