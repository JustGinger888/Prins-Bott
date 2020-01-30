const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
	const embed = new Discord.RichEmbed();
	let invite = await message.channel.createInvite({
		maxAge: 86400, //maximum time for the invite, in milliseconds
		maxUses: 1 //maximum times it can be used
	  }, `Requested with command by ${message.author.tag}`).catch(console.log);
	
	  message.delete().catch(vanish_=>{}); 
	  
	  message.channel.send(embed.addField("Here's your invite:", invite).setColor(0x1ae6b3));
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Invite Link",
	description: "Generates an invitation link to the server",
	usage: "!invite",
	category: "Standard",
	aliases: [""]
  };