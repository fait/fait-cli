const {spawn} = require('child_process');
const highland = require('highland');

const parseMessage = msg => {
	const [matches, id, label, content] = msg.match(/^📤(\d+)🏷(.+)📝(.+)🔚$/) || [false];

	if(matches) return {id, label, content};
	return msg;
};

function runMake(args) {
	const child = spawn('make', args);

	highland(child.stdout).split().each(line => {
		console.log(parseMessage(line));
	});
}

runMake(process.argv.slice(2));
