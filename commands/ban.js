module.exports = {
    name: 'ban',
    description: "bans a user on server",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been banned.`);
        }else{
            message.channel.send(`Invalid user or cannot ban this user!`);
        }
    }
}