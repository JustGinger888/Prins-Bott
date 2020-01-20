const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	message.channel.send(sayMessage);
  
  };
  
  // Help Object
  module.exports.help = {
	name: "",
	description: "",
	usage: "",
	category: "",
	aliases: [""]
  };