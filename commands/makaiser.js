module.exports = {
	name: 'makaiser',
	description: 'maka',
	execute(message, args) {
		message.channel.send({files: ["makaiser.jpg"]});    
	},
};