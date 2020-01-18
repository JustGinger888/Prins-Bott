const Discord = require('discord.js');
const language = require('./Translate/langOptions');
const translate = require('google-translate-api');
const speech = require('./Translate/messages');

module.exports.run = async (bot, message, args) => {

	if (language.some(ele => ele.name === command)) {
        if (args.length === 0) {
            message.reply(speech.BOT_FULLNAME_AUTO_ERROR);
        } else {
            let lang_to = language.filter(ele => ele.name===command)[0].abrv;
            let text = args.slice(0).join(' ');
            translate(text, {to: lang_to})
                .then(res => message.channel.send(res.text))
                .catch(err => message.channel.send(speech.BOT_TRANSLATION_ERROR + err));
        }
    }

    // Auto translates with abbreviation like !ko, !en, or !de
    if (language.some(ele => ele.abrv=== command)) {
        if (args.length === 0) {
            message.reply(speech.BOT_ABBR_AUTO_ERROR);
        } else {
            let lang_to = language.filter(ele => ele.abrv===command)[0].abrv;
            let text = args.slice(0).join(' ');
            translate(text, {to: lang_to})
                .then(res => message.channel.send(res.text))
                .catch(err => message.channel.send(speech.BOT_TRANSLATION_ERROR + err));
        }
    }

    // Specifies the text's language and translates it into a specific language
    if (command === "translate") {
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
    }

    if (command === "commands") {
        message.channel.send(speech.BOT_COMMANDS_HELP);
    }
  
  };
  
  // Help Object
  module.exports.help = {
	name: "translate",
	description: "",
	usage: "",
	category: "",
	aliases: [""]
  };