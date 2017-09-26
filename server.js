const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();
const server = require('http').createServer(app);

app.get('/bearer', (req, res) => {
  res.header("Set-Cookie", "nyan=chu;")
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/httponly', (req, res) => {
  res.header("Set-Cookie", "HttpOnly; nyan=chu;")
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/httponly/clear-cookie', (req, res) => {
  res.header("Set-Cookie", "nyan=; HttpOnly; expires=Sat, 16-Sep-2017 02:41:12 GMT")
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/clear-cookie', (req, res) => {
  res.header("Set-Cookie", "nyan=; expires=Sat, 16-Sep-2017 02:41:12 GMT")
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/no-cookie', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/api/clear', (req, res) => {
  res.header("Set-Cookie", "nyan=; expires=Sat, 16-Sep-2017 02:41:12 GMT")
  res.header('Access-Control-Allow-Origin', '*');
  res.send("nyan");
});

server.listen(3000, () => {
  console.log('run server');
});