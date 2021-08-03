# SmartThermometer

Elchikaに投稿した[Arduinoを使ってスマートな体温計を作ってみた](https://elchika.com/article/fa7963d6-b0da-400d-9595-e3870f0df368/)のソースコードです

## 実行方法

1. 記事の通りにセンサを配線します(ハードウェアは任意で)
2. /firmware/firmware.ino をArduino IDEで書き込みます
3. ```npm instal```を実行してパッケージを読み込み```node index.js```を実行

## コメント
コード内のポート```/dev/cu.usbserial-120```は適宜変更してください

Mac向けに作ったので、Windowsだと多少の変更が必要かもしれません
