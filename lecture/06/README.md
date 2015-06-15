#第6回

## JavaScriptの書き方

+ body要素の最後に書く

### 要素のスタイルをJavaScriptで変える

+ id属性で要素を指定する場合：`document.getElementById(id属性値).style[CSSプロパティ] = 値;`
+ class属性で要素を指定する場合：`document.getElementsByClassName(class属性値)[番号]..style[CSSプロパティ] = 値;`

要素が1個に決まるから，id属性を使う場合は単数形`Element`。要素が複数個あり得るから，class属性を使う場合は複数形`Elements
`になり，`[1]`のように順番を指定しなければならない。順番は`0`から数えることに注意。

## よくある間違い

+ スペルが間違っている。大文字小文字の違いも大事。
+ 全角スペースが紛れ込んでいる。Ricty Diminishedを入れれば防げるミス。
+ 括弧類が全角になっている。
