const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const { help } = require('mathjs');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run(client, message, args) {

        //Sort your commands into categories, and make seperate embeds for each category

        const helpemded = new Discord.MessageEmbed()
            .setTitle('Invite this bot 😊')
            .setThumbnail(URL = "https://images-na.ssl-images-amazon.com/images/I/61tx1FEzTNL.jpg")
            .addField('`;kick`', 'Kicks a member from your server via mention or ID')
            .addField('`;ban`', 'Bans a member from your server via mention or ID')
            .addField('`;clear`', 'Purges messages')
            .addField('`;meme`', 'Generates a random meme')
            .addField('`;ascii`', 'Converts text into ascii')
            .addField('`;calculate`',)
            .addField('`;ping`', 'Get the bot\'s API ping')
            .addField('`;weather`', 'Checks weather forecast for provided location')
            .addField('`;setprefix`', 'Sets a custom prefix')
            .addField('`;play`', 'Plays that song that you type')
            .addField('`;stop`', 'Stops the song that is currently plaing')
            .addField('`;skip`', 'Skips the current song')
            .addField('`;work`', 'Work for money')
            .addField('`;bal`', 'It stands for balence It is used for checking your balence')
            .addField('`;say`', 'the bot says what you want it to say! for e.g k ? say Hi')
            .addField('`;trigger`', 'Trigger yourself')
            .addField('`;mute`', 'Mute someone from the server for e.g k ? mute @RATIK PLAYS YT')
            .addField('`;shop`', 'The shop')
            .addField('`;colour`', 'To see a colour by writing the hex code for example ;color #ADD8E6')
            .addField('`;level`', 'Check your level and xp')
            .addField('`;leaderboard`', 'to check the server,s economy leaderboard')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=774208848532865044&permissions=8&scope=bot')
            .setTimestamp()
        message.author.send(helpemded)
        then
        message.channel.send("Hel for Kenso has been sent in your dm's")
    }
}