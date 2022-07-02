const Discord = require('discord.js');
const fetch = require("node-fetch");
require('dotenv').config();
const token = process.env.TOKEN;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

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
        message.channel.send('https://github.com/lonslonsy/discord-bot-js');
    } else if(command == 'givemecat'){
        message.channel.send('https://cataas.com/c');

// commands on seperate file
    } else if(command == 'quotes'){ //doesn't work for now, read the ./commands/quotes.js
        client.commands.get('quotes').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'mute'){
        client.commands.get('mute').execute(message, args);
    }

});

client.login(process.env.TOKEN);