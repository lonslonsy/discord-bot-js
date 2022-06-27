const Discord = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';

client.once('ready', () => {
    console.log('This code is now running')
});
client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

// text only commands
    if(command === 'github'){
        message.channel.send('https://github.com/lonslonsy');
    } else if(command == 'twitter'){
        message.channel.send('https://twitter.com/lonslonsy');
    } else if(command == 'sourcecode'){
        message.channel.send('null');

// commands on seperate file
    } else if(command == 'quotes'){
        
    }

});

client.login(process.env.TOKEN);