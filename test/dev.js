const express = require('express');
const builder = require('../build/build.js');
const app = express();

builder.watch();// 监听文件修改

app.use(express.static("./"));

const port = 8806;

app.listen(port)

console.log(`dev server listend at ${port}`);