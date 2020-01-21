const Discord = require('discord.js');
const fs = require("fs");
const embed = new Discord.RichEmbed();

module.exports.run = (bot, message, args) => {
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