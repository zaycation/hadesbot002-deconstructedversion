module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nCreated: ${message.author.createdAt}\nYour ID: ${message.author.id}\n${message.author.displayAvatarURL({ dynamic: true })}`);
	},
};
