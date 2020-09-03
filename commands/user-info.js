module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`${message.author.username}\nYour ID: ${message.author.id}\n Is User A Bot? ${message.author.bot}\nCreated: ${message.author.createdAt}\nLast Message: > ${message.author.lastMessage}\nUser's Avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
	},
};
