const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const helpemded = new Discord.MessageEmbed()
        .setTitle('These are the commands')
        .addField('`k?kick`', 'Kicks a member from your server via mention or ID')
        .addField('`k?ban`', 'Bans a member from your server via mention or ID')
        .addField('`k?clear`', 'Purges messages')
        .addField('`k?meme`', 'Generates a random meme')
        .addField('`k?ascii`', 'Converts text into ascii')
        .addField('`k?calculate`', )
        .addField('`k?ping`', 'Get the bot\'s API ping')
        .addField('`k?weather`', 'Checks weather forecast for provided location')
        .addField('`k?setprefix`', 'Sets a custom prefix')
        .addField('`k?play`', 'Plays that song that you type')
        .addField('`k?stop`', 'Stops the song that is currently plaing')
        .addField('`k?work`', 'Work for money')
        .addField('`k?bal`', ('It stands for balence It is used for checking your balence'))
        .addField('`k?say`', 'the bot says what youwant it to say! for e.g k?say Hi')
        .addField('`k?trigger`', ('Trigger yourself'))
        .addField('`k?mute`', ('Mute someone from the server for e.g k?mute @RATIK PLAYS YT'))
        .setTimestamp()
        message.channel.send(helpemded)
    }
}