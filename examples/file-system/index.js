const fs = require('fs');

fs.readFile('hello.txt', 'utf-8', (err, data) => {
	if (err) throw err;

	console.log({data});
});
