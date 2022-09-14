module.exports = {
	name: 'yoko',
	description: 'yoko',
	execute(message, args) {
		message.channel.send({files: ["yoko.gif"]});
	},
};