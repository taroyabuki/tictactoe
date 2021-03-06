# 盤面のスコア

勝ち負けという意味では，マルの勝ち，バツの勝ち，引き分け，勝負が付いていない状態の4種類がある。

+ マルの勝ち：1
+ バツの勝ち：-1
+ 引き分け：0
+ 勝負が付いていない：null

ということにする。「`null`」というのは，「値がないこと」を示す値である。

```
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
```

# リファクタリング

`人が一手進める`と`COMが一手進める`でやっている画面の更新を，`画面を更新する`にまとめる。「終わった」フラグは不要になる。

```
function 画面を更新する() {
  var i;
  for (i = 0; i < セル数; ++i) {
    if (盤面[i] == 1) {
      $('#セル' + i).addClass('○');
    } else if (盤面[i] === -1) {
      $('#セル' + i).addClass('×');
    }
  }
  for (i = 0; i < 筋の数; ++i) {
    var 結果 = そろったか(筋の配列[i]);
    if (結果 !== 0) {
      $('div').addClass('終');
      筋に勝印を付ける(筋の配列[i]);
    }
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

function COMが一手進める() {
  var 位置 = Math.floor(Math.random() * 9);
  if (盤面[位置] !== 0) {//埋まっていたら
    COMが一手進める();//やり直し
    return;//ここで終わり。この先には進まない
  }
  盤面[位置] = COM;
  画面を更新する();
}
```

# 戦略の交換

COMの戦略を簡単に変えられるように，ランダムマルバツの本質的な部分を関数にする。

```
function COMが一手進める() {
  COMの戦略();
  console.log(盤面);
  画面を更新する();
}

//関数に変数としての名前を付ける
var COMの戦略 = ランダム戦略で一手進める;

function ランダム戦略で一手進める() {
  var 位置 = Math.floor(Math.random() * 9);
  if (盤面[位置] !== 0) {//埋まっていたら
    ランダム戦略で一手進める();//やり直し
    return;//ここで終わり。この先には進まない
  }
  盤面[位置] = COM;
}
```

# ナイーブマルバツ

`index.html`を`random.html`にコピーする。

`index.html`で`naive.js`を読み込む。

```
<script src='tictactoe.js'></script>
<script src='naive.js'></script>
```

`naive.js`を作る。

```
COMの戦略 = 二個並びに注意する戦略で一手進める;

function 二個並びに注意する戦略で一手進める() {
  var i;
  //勝つ手を探す
  for (i = 0; i < セル数; ++i) {
    if (盤面[i] === 0) {
      盤面[i] = COM;//とりあえず，置いてみる
      if (盤面のスコアを返す() == COM) {//COMの勝ち
        return;//これでいい
      }
      盤面[i] = 0;//元に戻す
    }
  }
  //負けを防ぐ手を探す
  for (i = 0; i < セル数; ++i) {
    if (盤面[i] === 0) {
      盤面[i] = 人;//とりあえず，置いてみる
      if (盤面のスコアを返す() == 人) {//人の勝ち
        盤面[i] = COM;//そこを選んで
        return;//終了
      }
      盤面[i] = 0;//元に戻す
    }
  }
  ランダム戦略で一手進める();
}
```
