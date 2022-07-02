module.exports = {
    name: 'kick',
    description: "kicks a user on server",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
                message.channel.send(`<@${memberTarget.user.id}> has been kicked.`);
        }else{
            message.channel.send(`Invalid user or cannot kick this user!`);
        }
    }
}