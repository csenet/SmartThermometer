'use strict';
require('date-utils');
const SerialPort = require('serialport');
const player = require('node-wav-player');
const { Readline } = SerialPort.parsers;
const fs = require('fs');

//シリアルポートは適宜変更してください
const port = new SerialPort('/dev/cu.usbserial-1120', { baudRate: 115200 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

function sound(path) {
  player.play({
    path: './sound/' + path
  })
}

let temp_bak = -1;
let count = 0;
let sum = 0;
let N = 5;
parser.on('data', data => {
  data = data.replace('\r', '');
  switch (data) {
    case "Found":
      console.log("そのままお待ち下さい...");
      sound("wait.mp3");
      break;
    default:
      console.log(data + "℃");
      sound("ok.mp3");
      const now = new Date();
      const timeStamp = now.toFormat('DDD MMM DD YYYY HH24:MI:SS');
      fs.appendFile('data.csv', timeStamp + "," + data + "℃\n", (err) => {
        if (err) throw err;
        console.log('data.csvに追記されました');
      });
  }
});