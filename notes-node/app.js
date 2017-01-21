console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argvs = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);

console.log('Process', process.argv);
console.log('Yargs', argvs);

if (command === 'add') {
	console.log("Adding new note");
} else if (command === 'list') {
	console.log("Listing all notes");
} else if (command === 'read') {
	console.log("Reading all notes");
} else if (command === 'remove') {
	console.log("removing all notes");
} else {
	console.log('command not recognized');
}