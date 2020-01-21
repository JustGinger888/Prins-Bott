const Discord = require('discord.js');
const fs = require("fs");
const embed = new Discord.RichEmbed();

module.exports.run = (bot, message, args) => {
/*
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
        */

        fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        const admin = [];
        const media = [];
        const custom = [];
        const standard = [];

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            let filesArray = [props.help.name, props.help.description, props.help.usage]
            if (props.help.category === 'Standard'){
                standard.push(`**${filesArray[0]}** \n${filesArray[1]} \nUsage: ****${filesArray[2]}****\n`);
            }
            if (props.help.category === 'Admin'){
                admin.push(`**${filesArray[0]}** \n${filesArray[1]} \nUsage: ****${filesArray[2]}****\n`);
            }
            else if (props.help.category === 'Media'){
                media.push(`**${filesArray[0]}** \n${filesArray[1]} \nUsage: ****${filesArray[2]}****\n`);
            }
            else if (props.help.category === 'Custom'){
                custom.push(`**${filesArray[0]}** \n${filesArray[1]} \nUsage: ****${filesArray[2]}****\n`);
            }
        });

        const respone = new Discord.RichEmbed()
        .addField("Standard Commands:",standard)
        .addField("Admin Commands:",admin)
        .addField("Media Commands:",media)
        .addField("Custom Commands:",custom)
        .setFooter('Feel free to leave some command suggestions or add them yourself!')
        .setColor(0x1ae6b3)
        .setTitle("Prins-Bot Commands")
        .setURL("https://github.com/JustGinger888/Prins-Bott");
        
        message.channel.send(respone);

    });

};

module.exports.help = {
	name: "Help",
	aliases: [""],
	description: "Displays all implimented commands",
	usgae: "!help",
	category: ""
};