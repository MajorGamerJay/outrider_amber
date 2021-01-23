// This program is created by MajorGamerJay <majorgamerjay@gmail.com> under the MIT License

// Declarations for classes
const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

// Declaring variables:
const welcome_message = `hey there! I am outrider Amber from Genshin Impact BD! I will be your guide from now on. If you need any help, just type \`bb' help\`. If you're thinking about what \`bb\` means, it means my favorite little barron bunny! :D`;

const bb_info = `bb' info`;
const bb_gibd = `bb' gibd`;
const bb_help = `bb' help`;

// Declaring embeds:
const help_embed = new MessageEmbed()
.setTitle('Hi! I am Amber and welcome to Genshin Impact BD!')
.setThumbnail('https://static.wikia.nocookie.net/a04f4012-6f9f-40be-a662-2b9af26ed22e')
.setDescription('It seems you have invoked the help command traveller! Just tell me what you need, a date? No, I\'m sorry I can\'t do that :(. I can show you all my help commands! :D')
.addFields(
    { name: 'bb\' help', value: 'This command!' },
    { name: 'bb\' info', value: 'Basic information about the bot' },
    { name: 'bb\' gibd', value: 'Shows information about Genshin Impact BD!' },
)
.setColor(0xff0000)
.setTimestamp()
.setFooter('This bot is made by anti-nunur pani gang!')
.setURL('https://google.com');

const welcome_embed = new MessageEmbed()
.setTitle('Welcome!');

// Declaring functions
const trigger = (command, author) => console.log(`${command} has been triggered by ${author}`);

client.on('ready', () => {
    console.log(`Logged the bot in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith("bb")) {
        // Info message: bb' info
        if (msg.content === bb_info) {
            msg.reply(welcome_message);
            trigger(bb_info, msg.author.tag);
        }

        // Help message:  bb' help
        else if (msg.content === bb_help) {
            msg.channel.send(help_embed);
            trigger(bb_help, msg.author.tag);
        }

        else {
            msg.channel.send("Hey there traveler! I am outrider amber! If you want to know information about the server (or about me :flushed:), please say `bb' info`");
            trigger(msg.content, msg.author.tag);
        }
    }
});

client.login('NzYxODk2NzM5NzM2NjQ5NzI5.X3hRog.um_lCTZ2yGzsarK8MYXAivSjMoc');
