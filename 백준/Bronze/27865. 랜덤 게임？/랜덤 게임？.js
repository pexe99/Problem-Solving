const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(i) {
    console.log(i=='Y'?'! 1':'? 1')
}).on('close', function(){
	process.exit();
});