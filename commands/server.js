const Discord = require("discord.js");
module.exports = {
    name: "server",
    description: "ss",
async run (client, message, args) {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setTitle("SUBSCRIBE TO RATIK PLAYS ON YOUTUBE")
        .setDescription("Server Information")
        .setColor("#ff0000")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount)
    message.channel.send(serverembed);
}}