const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	const embed = new Discord.RichEmbed();

	// Get delete count
	const deleteCount = parseInt(args[0], 10);
	
	// Checking Lenghth
	if(!deleteCount || deleteCount < 2 || deleteCount > 100)
	return message.reply(embed.addField('ERROR', "Please provide a number between 2 and 100 for the number of messages to delete").setColor(0x1ae6b3));
	
	// Get messages and delete them
	const fetched = await message.channel.fetchMessages({limit: deleteCount});
	message.channel.bulkDelete(fetched)
	.catch(error => message.reply(embed.addField('ERROR', `Couldn't delete messages because of: ${error}`).setColor(0x1ae6b3)));

  
  };
  
  // Help Object
  module.exports.help = {
	name: "Purge messages",
	description: "Deletes a specified number of messages on channel",
	usage: "!purge (x)",
	category: "Standard",
	aliases: [""]
  };