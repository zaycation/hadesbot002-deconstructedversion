const Discord = require('discord.js')

module.exports.run = {
	execute(message) {
		message.channel.send('Pong.');
	},
};

module.exports.config = {
	name: 'ping',
	description: 'Play ping pong with Hades.',
	usage: '!ping',
	accesableby: 'Members',
	aliases: ['p1']
}