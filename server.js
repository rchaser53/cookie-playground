const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();
const server = require('http').createServer(app);

app.get('/1', (req, res) => {
  res.header("Set-Cookie", "nyan=chu")
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/clear', (req, res) => {
  res.header("Set-Cookie", "nyan=; expires=Sat, 16-Sep-2017 02:41:12 GMT")
  res.header('Access-Control-Allow-Origin', '*');
  res.send("nyan");
});

app.get('/2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index2.html'));
});

app.get('/no-cookie', (req, res) => {
  res.header("Set-Cookie", "nyan=; expires=Sat, 16-Sep-2017 02:41:12 GMT")
  res.sendFile(path.resolve(__dirname, 'noCookie.html'));
});

server.listen(3000, () => {
  console.log('run server');
});