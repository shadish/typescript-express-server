"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// import { exec } from 'child_process';
const exec = require('child_process').exec;
app.get('/', (req, res) => {
    const child = exec('ls');
    res.send(child);
});
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
// const exec = require('child_process').exec;
//# sourceMappingURL=server.js.map