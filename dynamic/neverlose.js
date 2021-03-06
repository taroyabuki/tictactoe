'use strict';
/*global $, セル数, 盤面, COM, 盤面のスコアを返す, 画面を更新する, ランダム戦略で一手進める, COMの戦略:true */

COMの戦略 = 負けない戦略で一手進める;

function 最善手とそのスコアを探す(手番) {
  var 暫定最善手 = null;
  var 暫定最高スコア = -手番 * 1000;
  for (var i = 0; i < セル数; ++i) {
    if (盤面[i] === 0) {//まだ埋まっていない
      盤面[i] = 手番;//そこを選んだ場合の仮の盤面を作る
      var スコア = 盤面のスコアを返す();
      if (スコア === null) {//終わっていない
        var 結果 = 最善手とそのスコアを探す(-1 * 手番);//次の手を調べる
        スコア = 結果.スコア;
      }
      //先手は大きなスコア，後手は小さなスコアを目指す
      if (手番 * スコア > 手番 * 暫定最高スコア) {
        暫定最高スコア = スコア;
        暫定最善手 = i;
      }
      盤面[i] = 0;//仮の盤面を破棄し元に戻す
    }
  }
  return {'最善手': 暫定最善手, 'スコア': 暫定最高スコア};
}

function 負けない戦略で一手進める() {
  if ($('.済').length === 0) {//COMが先手の場合，初手はランダムにする
    ランダム戦略で一手進める();
  } else {
    var 結果 = 最善手とそのスコアを探す(COM);
    盤面[結果.最善手] = COM;
  }
}
