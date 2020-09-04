const Discord = require('discord.js');

module.exports = {
    name: 'embedtest',
    description: 'Command created to test embed functionality of Hades',
    execute(message, bot, args) {


        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle('Some title')
            .attachFiles(['../assets/discordjs.png'])
            .setImage('attachment://discordjs.png');

        channel.send(exampleEmbed);


    },
};