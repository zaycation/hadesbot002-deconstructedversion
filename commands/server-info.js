module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
        message.channel.send({embed: {
            color: 15844367,
			description: `${message.guild.name}\nRegion: ${message.guild.region}\nTotal members: ${message.guild.memberCount}\n
			Number of Boosts: ${message.guild.premiumSubscriptionCount} | Boost Tier: ${message.guild.premiumTier}\nServer Owner: ${message.guild.owner} | ID: ${message.guild.ownerID}`,
          }});
    },
};
