module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
        message.channel.send({embed: {
            color: 3447003,
            description: `Username: ${message.author.username}\nYour ID: ${message.author.id}\nCreated: ${message.author.createdAt}\n\nIs User A Bot? ${message.author.bot}\n\nLast Message: \n> ${message.author.lastMessage}\n\nUser's Avatar: ${message.author.displayAvatarURL({ dynamic: true })}`
          }});
    },
};
