import express from 'express';
const app = express();
const exec = require("child_process").exec;

const runCommand = cmd => {
  return exec(`${cmd}`, (error, stdout, stderr) => {
    // if (error) {
    //   console.error(`exec error: ${error}`);
    //   return;
    // }
    console.log(`stdout: ${stdout}`);
    return `${stdout}`;

    // console.log(`stderr: ${stderr}`);
  });
};

app.get('/', (req, res) => {
  const ls = runCommand("ls");
  res.send(ls);
//   // const child = exec('ls');
//   // res.send(child);

// var spawn = require('child_process').spawn;
// var x = spawn('env');
// var ls  = spawn('ls', ['-l']);
// ls.stdout.on('data', function (data) {
//    console.log(data);
// });
});

// const port = 3000;

// app.listen(port, () => console.log(`Example app listening on port ${port}`));

