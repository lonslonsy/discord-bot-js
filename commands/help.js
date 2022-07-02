module.exports = {
    name: 'help',
    description: 'shows the list of commands',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fefefe')
        .setTitle('List of Commands')
        .addFields(
            {name: '!github', value:'visit my GitHub profile'},
            {name: '!twitter', value:'visit my Twitter profile'},
            {name: '!sourcecode', value:'look at the source code of this bot'},
            {name: '!givemecat', value:'gives you random picture of a cat'},
            {name: '!quotes', value:"gives you random quotes (doesn't work for now)"},
            {name: '!kick', value:'kicks a user in this server'},
            {name: '!ban', value:'bans a user in this server'},
            {name: '!mute', value:'mutes the user with time'}

        )
        message.channel.send({embeds: [newEmbed]});

    }
}