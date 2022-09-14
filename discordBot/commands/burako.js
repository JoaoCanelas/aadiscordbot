module.exports = {
	name: 'burako',
	description: 'burako',
	execute(message, args) {
        message.channel.send({files: ["burako.gif"]});
    },
};