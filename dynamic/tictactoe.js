'use strict';
/*global $, window */

function 画面を更新する() {
  var i;
  for (i = 0; i < セル数; ++i) {
    var 対象要素 = $('#セル' + i);
    if (盤面[i] === 1) {
      対象要素.addClass('○').addClass('済');
    } else if (盤面[i] === -1) {
      対象要素.addClass('×').addClass('済');
    }
  }
  for (i = 0; i < 筋の数; ++i) {
    if (そろったか(筋の配列[i]) !== 0) {
      筋に勝印を付ける(筋の配列[i]);
    }
  }
  if (盤面のスコアを返す() !== null) {//あとかたづけ
    $('div').addClass('終').removeClass('済').click(function() {
      window.location.reload();
    });
  }
}

function 盤面のスコアを返す() {
  for (var i = 0; i < 筋の数; ++i) {
    var 結果 = そろったか(筋の配列[i]);
    if (結果 !== 0) {
      return 結果;//勝負が付いた
    }
  }
  if (盤面.indexOf(0) !== -1) {
    return null;//終わっていない
  }
  return 0;//引き分け
}

function そろったか(筋) {
  var a = 盤面[筋[0]];
  var b = 盤面[筋[1]];
  var c = 盤面[筋[2]];
  if (a === b && b === c) {
    return a;
  }
  return 0;//そろっていない
}

function 筋に勝印を付ける(筋) {
  $('#セル' + 筋[0]).addClass('勝');
  $('#セル' + 筋[1]).addClass('勝');
  $('#セル' + 筋[2]).addClass('勝');
}

function ランダム戦略で一手進める() {
  var 位置 = Math.floor(Math.random() * 9);
  if (盤面[位置] !== 0) {//埋まっていたら
    ランダム戦略で一手進める();//やり直し
    return;//ここで終わり。この先には進まない
  }
  盤面[位置] = COM;
}

var COMの戦略 = ランダム戦略で一手進める;//ここを変えれば別の戦略になる

var COMが一手進める = function() {
  COMの戦略();
  画面を更新する();
};

function 画面サイズを調整する() {
  var 横 = $(window).width();
  var 縦 = $(window).height();
  if (横 <= 縦) {
    $('body').css('width', 横 + 'px');
  }
  else {
    $('body').css('width', 縦 + 'px');
  }
}

function 人が一手進める(位置) {
  盤面[位置] = 人;
  画面を更新する();
  var スコア = 盤面のスコアを返す();
  if (スコア === null) {//終わっていない
    COMが一手進める();
  }
}

var 盤面 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var セル数 = 盤面.length;
var 筋の配列 = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]];
var 筋の数 = 筋の配列.length;

var 人 = 1;//先手ということ
var COM = -1;//後手ということ

$(window.document).ready(function() {//初期設定
  画面サイズを調整する();
  $(window).resize(画面サイズを調整する);//ウィンドウサイズ変更への備え

  if (Math.random() < 0.5) {//50%の確率でCOMを先手にする
    人 = -1;
    COM = 1;
    COMが一手進める();
  }
});
