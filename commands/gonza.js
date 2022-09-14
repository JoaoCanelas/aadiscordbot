module.exports = {
	name: 'gonza',
	description: 'gonza el burro',
	execute(message, args) {
        message.channel.send({files: ["gonza.jpg"]});
	},
};