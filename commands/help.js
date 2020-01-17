const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

	const embed = new Discord.RichEmbed()
        .setDescription('The list of commands (TO_BE) implemented.')
        .addField('!events TBA', 'Lists all of the upcoming events found on SOL Computing Channel.', true)
        .addField('!society TBA', 'Displays details about the Solent Computing Society schedule.', true)
        .addField('!translate TBA', 'Translates text from a detected language into a target language.', false)
        .addField('!say', 'Make Prins-Bott say anything you want.', true)
        .addField('!purge', 'Deletes # of messages in a channel.',true)
        .addField('!suggest', 'Allows a user to make a suggestion, posted to suggestions channel.', false)
        .addField('!mute', 'Mutes a specified user in the server.',true)
        .addField('!unmute', 'Unmutes a specified user in the server.', true)
        .addField('!invite TBA', 'Generates an invite link which the bot then posts it in the server.', false)
        .addField('!kick', 'Kick a specified User from the Server.', true)
        .addField('!ban', 'Ban a specified User from the Server.', true)
        .addField('!softban TBA', 'Soft Bans a User from the Server by removing their messages and kicks them.', false)
        .addField('!youtube TBA', 'Search for a video found on YouTube.', true)
        .addField('!urban TBA', 'Search definitions on Urban Dictionary.', true)
        .addField('!ping', 'Displays the Ping of both the Server and Bot and returns pong cause why not.', false)
        .addField('!imgur TBA', 'Search for pictures and memes on imgur.', true)
        .addField('!giphy TBA', 'Search for your desired Gifs using Giphy.', true)
        .addField('!weather TBA', 'Gets the weather forecast for Southampton and displays it in server.', false)
        .setFooter('Feel free to leave some command suggestions or add them yourself!')
        .setColor(0x1ae6b3)
        .setTitle("Prins-Bot Commands")
        .setURL("https://github.com/JustGinger888/Prins-Bott");
        
        message.channel.send(embed);
};

module.exports.help = {
	name: "",
	aliases: [""],
	description: "",
	usgae: "",
	category: "",
};