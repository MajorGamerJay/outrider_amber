// This program is created by MajorGamerJay <majorgamerjay@gmail.com> under the MIT License

// Declarations for classes
const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) }});

// Declaring variables:
const infomessage = `hey there! I am outrider Amber from Genshin Impact BD! I will be your guide from now on. If you need any help, just type \`bb' help\`. If you're thinking about what \`bb\` means, it means my favorite little barron bunny! :D\nFor more information regarding the server, please click this link!`;

const bb_info = `bb' info`;
const bb_gibd = `bb' gibd`;
const bb_help = `bb' help`;

// Declaring embeds:
const help_embed = new Discord.MessageEmbed()
.setTitle('Hi! I am Amber and welcome to Genshin Impact BD!')
.setThumbnail('https://static.wikia.nocookie.net/a04f4012-6f9f-40be-a662-2b9af26ed22e')
.setDescription('*It seems you have invoked the help command traveller! Just tell me what you need.*\n\n*A date? No, I\'m sorry I can\'t do that* :frowning:\n\n*But, I can show you all my help commands!* :grin:\n')
.addFields(
    { name: 'bb\' help', value: 'This command!' },
    { name: 'bb\' info', value: 'Basic information about the bot and the server' },
    { name: 'bb\' gibd', value: 'Shows information about Genshin Impact BD!' },
)
.setColor(0xff0000)
.setTimestamp()
.setFooter('This bot is made by anti-nunur pani gang!')

// Declaring functions
const trigger = (command, author) => console.log(`${command} has been triggered by ${author}`);

function make_embed(member_obj) {
    return new Discord.MessageEmbed()
    .setTitle('Welcome to Genshin Impact BD!')
    .setThumbnail(member_obj.user.displayAvatarURL())
    .setDescription(`Welcome to Genshin Impact BD @${member_obj.user.tag}!\n\nI am your guide the Outrider Amber! To invoke any help commands, please type \`bb' help\` in any of the bots channel!`)
    .setFooter(`Account created at ${member_obj.user.createdAt.toLocaleDateString("en-US")} ${member_obj.user.createdAt.toLocaleTimeString("en-US")}`)
    .setColor(0xff0000)
    .setTimestamp();
}

client.on('ready', () => {
    console.log(`Logged the bot in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith("bb")) {
        // Info message: bb' info
        if (msg.content === bb_info) {
            msg.reply(infomessage);
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

client.on('guildMemberAdd', member => {
    const channel = member.guild.systemChannel;
    channel.send(`Welcome to the server, traveler ${member}!`);
    channel.send(make_embed(member));
    console.log(`Guild member joined, ${member.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
