module.exports = {
	name: 'skinner',
	description: 'skinner',
	execute(message, args) {
        message.channel.send({files: ["skinner.jpg"]});
    },
};