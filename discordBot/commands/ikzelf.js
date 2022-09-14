module.exports = {
	name: 'ikzelf',
	description: 'ikke',
	execute(message, args) {
        message.channel.send({files: ["dutch.jpg"]});
    },
};