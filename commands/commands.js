module.exports = {
	name: 'commands',
    description: 'Quick list of all commands in the chat',
    args: true,
    cooldown: 5,
	execute(message, args) {

        const data = [];
        const { commands } = message.client

		data.push('Here\'s a list of all my commands:\n\n`[Always remember, my prefix is !]`\n\n');
		data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
        
        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};