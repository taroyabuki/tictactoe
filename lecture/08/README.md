#第8回

## 関数の引数

+ 関数は，あらかじめ決められたことしかできないわけではない。関数を呼び出すときに情報を与えることで，関数の振る舞いを変えられる。そのような情報を「引数（ひきすう）」という。
+ 引数を伴う関数の定義方法を確認する。

```
function 関数の名前(引数) {
  引数を使う仕事1;
  引数を使う仕事2;
  ...
}
```

## jQuery

JavaScriptのためのデファクトとも言える便利なライブラリ。

### jQueryの導入方法

#### 方法1

ウェブ上からロードする。

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

メリット：手軽。高速。
デメリット：オフラインでは開発ができない。

#### 方法2

ローカルにファイルを置く。

1. `http://code.jquery.com/jquery-2.1.4.min.js`をダウンロードする。
1. `<script src="jquery-2.1.4.min.js"></script>`として呼び出す。

メリットとデメリットは方法1と反対になる。

### jQueryの利用

CSSのセレクタと同じ書き方で要素を指定する。たとえば，id属性値が`セル1`である要素を指定したければ，`$('#セル1')`とすればよい。

#### jQueryでスタイルを操作する

```
$(セレクタ).css(プロパティ, 値);
```

##### よくある間違い

```
$('#セル1').css(background, blue);
```

プロパティと値は引用符で囲うこと。

```
$('#セル1').css('background', 'blue');
```

### jQueryの利用2

対象が同じなら，操作はつなげて書ける。

```
$('#セル1').css('background', 'blue');
$('#セル1').css('border-radius', '50px');
```

と書く代わりに，次のように書ける。

```
$('#セル1').css('background', 'blue').css('border-radius', '50px');
```