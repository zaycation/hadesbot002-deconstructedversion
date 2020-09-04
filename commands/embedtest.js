module.exports = {
    name: 'embedtest',
    description: 'Command created to test embed functionality of Hades',
    execute(message) {
        message.channel.send({embed: {
            color: 3447003,
            description: 'Embed Testing ~ Can you hear me?'
          }});
    },
};