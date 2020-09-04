module.exports = {
	name: 'reactions',
	description: 'Set up reaction roles for server.',
	execute(message) {
		let embed = new Discord.MessageEmbed()
		.setTitle('Reaction Roles')
		.setDescription('React to obtain your role of choice')
		.setColor('Green')
		let msgEmbed = await message.channel.send(embed).
		msgEmbed.react('🐢')
	},
};
