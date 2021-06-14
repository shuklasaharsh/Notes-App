// We start by Loading in the first module
// This module is the file system module

const fs = require('fs')
// We use the WriteFileSync command to save a file called notes.txt
fs.writeFileSync('notes.txt', 'This file was created with NODE.JS')
