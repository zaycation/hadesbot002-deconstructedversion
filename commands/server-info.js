module.exports = {
	name: 'server-info',
	description: 'Display info about this server.',
	execute(message) {
        message.channel.send({embed: {
			color: 15844367,
			title: 'Server Info',
			url: 'https://discord.me/digitalresistancevip',
			description: 'Displays additional information about the server that Hades is summoned in',
			fields: [{
				name: 'Server Name',
				value: `${message.guild.name}`
			},
			{
				name: 'Server Region',
				value: `${message.guild.region}`
			},
			{
				name: 'Total Member Count',
				value: `${message.guild.memberCount}`
			},
			{
				name: '# of Server Boosts',
				value: `${message.guild.premiumSubscriptionCount}`
			},
			{
				name: 'Server Boost Tier',
				value: `${message.guild.premiumTier}`
			},

			{
				name: 'Server Owner',
				value: `${message.guild.owner} | ID: ${message.guild.ownerID}`
			},],
			//description: `${message.guild.name}\nRegion: ${message.guild.region}\nTotal members: ${message.guild.memberCount}\nNumber of Boosts: ${message.guild.premiumSubscriptionCount} | Boost Tier: ${message.guild.premiumTier}\nServer Owner: ${message.guild.owner} | ID: ${message.guild.ownerID}`,
			footer: {
				icon_url: client.user.avatarURL,
				text: 'DM zsh#7219 for any development inquiries or bug requests'
			}
          }});
    },
};
