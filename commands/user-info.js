module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`Username: ${message.author.username}\nYour ID: ${message.author.id}\nCreated: ${message.author.createdAt}\n\n Is User A Bot? ${message.author.bot}\nLast Message: >${message.author.lastMessage}\n\nUser's Avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
	},
};
