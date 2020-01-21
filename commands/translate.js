const Discord = require('discord.js');
const language = require('./Translate/langOptions');
const translate = require('google-translate-api');
const speech = require('./Translate/messages');
const prefix = "!";

module.exports.run = async (bot, message, args) => {
    //const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (args.length < 3) {
        message.reply(speech.BOT_TRANS_SPECIFIC_ERROR);
    } else {
        let argFrom = args[0].toLowerCase();
        let argTo = args[1].toLowerCase();

        let lang_from = language.filter(ele => ele.name === argFrom)[0].abrv;
        let lang_to = language.filter(ele => ele.name=== argTo)[0].abrv;
        let text = args.slice(2).join(' ');

        translate(text, {from: lang_from, to: lang_to})
            .then(res => message.channel.send(res.text))
            .catch(err => console.log(speech.BOT_TRANSLATION_ERROR + err));
    }
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Translation",
	description: "Translate your message from one language to another",
	usage: "!translate (from-to-text)",
	category: "Custom",
	aliases: [""]
  };