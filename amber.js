const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login('NzYxODk2NzM5NzM2NjQ5NzI5.X3hRog.um_lCTZ2yGzsarK8MYXAivSjMoc');
