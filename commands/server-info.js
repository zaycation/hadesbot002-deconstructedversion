module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send(`${message.guild.name}\nRegion: ${message.guild.region}\nTotal members: ${message.guild.memberCount}\nServer Owner: ${message.guild.owner} | ${message.guild.ownerID}\nNumber of Boosts: ${message.guild.premiumSubscriptionCount} | ${message.guild.premiumTier}`);
	},
};
