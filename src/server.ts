import express from 'express';
const app = express();
// import { exec } from 'child_process';
const exec = require('child_process').exec;

app.get('/', (req, res) => {
  const child = exec('ls');
  res.send(child);
});

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// const exec = require('child_process').exec;
