module.exports = {
	name: 'commands',
    description: 'Quick list of all commands in the chat',
    args: true,
    cooldown: 5,
	execute(message, args) {
		message.reply('Here\'s a list of all my commands:\n\n`[Always remember, my prefix is !]`\n\n!args-info\n!avatar\n!help\n!kick\n!ping\n!purge\n!server-info\n!user-info');
	},
};