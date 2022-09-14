module.exports = {
	name: 'cheess',
	description: 'cheess',
	execute(message, args) {
        message.channel.send({files: ["cheess.jpg"]});
    },
};