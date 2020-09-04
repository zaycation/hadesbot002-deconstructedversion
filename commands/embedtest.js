module.exports = {
    name: 'embedtest',
    description: 'Command created to test embed functionality of Hades',
    execute(message, bot, args) {


        message.channel.send({embed: {
            color: 3447003,
            description: "A very simple Embed!"
          }});


    },
};