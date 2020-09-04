module.exports = {
	name: 'commands',
    description: 'List of all commands',
    args: true,
    cooldown: 2,
	execute(message, args) {
		message.reply('Here\'s a list of all my commands:\n\n`[Always remember, my prefix is !]`\n\n');
		data.push(commands.map(command => command.name).join(', '));
		data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
	},
};