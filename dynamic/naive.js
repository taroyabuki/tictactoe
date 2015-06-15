'use strict';
<<<<<<< HEAD
/*global $, セル数, 筋の数, 盤面, 人, COM, 筋の配列, 画面を更新する, ランダム戦略で一手進める, COMが一手進める:true */
=======
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
>>>>>>> origin/master

function 揃う場所を探す(手番) {
  for (var i = 0; i < 筋の数; ++i) {
    var 筋 = 筋の配列[i];
    var a = 盤面[筋[0]];
    var b = 盤面[筋[1]];
    var c = 盤面[筋[2]];
<<<<<<< HEAD
    var 合計 = a + b + c;
    for (var j = 0; j < 3; ++j) {
      if (盤面[筋の配列[i][j]] === 人) {
        ++相手の数;
      }
    }
    if (相手の数 === 2) {
      for (var k = 0; k < 3; ++k) {
        if (盤面[筋の配列[i][j]] === 0) {
          盤面[筋の配列[i][j]] = COM;
          return;
        }
      }
    }
  }
}

function リーチに気を付ける戦略で一手進める() {
  if ($('.済').length === 0) {//COMが先手の場合，初手はランダムにする
    var 位置 = Math.floor(Math.random() * セル数);
    盤面[位置] = COM;
  } else {
    for (var i = 0; i < 筋の数; ++i) {
      var 相手の数 = 0;
      for (var j = 0; j < 3; ++j) {
        if (盤面[筋の配列[i][j]] === 人) {
          ++相手の数;
        }
      }
      if (相手の数 === 2) {
        for (var k = 0; k < 3; ++k) {
          if (盤面[筋の配列[i][j]] === 0) {
            盤面[筋の配列[i][j]] = COM;
            return;
          }
        }
      }
    }
    ランダム戦略で一手進める();
  }
=======
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
>>>>>>> origin/master
}

//関数を上書きする
COMが一手進める = function() {
<<<<<<< HEAD
  リーチに気を付ける戦略で一手進める();
=======
  二個並びに注意する戦略で一手進める();
>>>>>>> origin/master
  画面を更新する();
};
