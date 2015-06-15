'use strict';
/*global セル数, 筋の数, 盤面, COM, 筋の配列, 画面を更新する, ランダム戦略で一手進める, COMが一手進める:true */

function 空いている場所(筋) {
  for (var i = 0; i < 3; ++i) {
    var 場所 = 筋[i];
    if (盤面[場所] === 0) {
      return 場所;
    }
  }
  return null;//空いている場所無し
}

function 揃う場所を探す(手番) {
  for (var i = 0; i < 筋の数; ++i) {
    var 筋 = 筋の配列[i];
    var a = 盤面[筋[0]];
    var b = 盤面[筋[1]];
    var c = 盤面[筋[2]];
    if (手番 * (a + b + c) === 2) {
      return 空いている場所(筋);
    }
  }
  return null;//候補無し
}

function 二個並びに注意する戦略で一手進める() {
  var 次の手 = 揃う場所を探す(COM);//勝つ手を探す
  if (次の手 !== null) {
    盤面[次の手] = COM;
    return;
  }
  次の手 = 揃う場所を探す(-COM);//相手の勝ちを阻む手を探す(阻めないこともある)
  if (次の手 !== null) {
    盤面[次の手] = COM;
    return;
  }
  ランダム戦略で一手進める();
}

//関数を上書きする
COMが一手進める = function() {
  二個並びに注意する戦略で一手進める();
  画面を更新する();
};
