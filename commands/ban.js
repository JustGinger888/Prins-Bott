const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	const embed = new Discord.RichEmbed()

	// Only admins can ban
	if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
	return message.reply(embed.addField('ERROR', "You don't have permissions to use this!").setColor(0x1ae6b3));
	
	// Validates the ban of a memebr by checking for their existance 
	let member = message.mentions.members.first();
	if(!member) return message.reply(embed.addField('ERROR', "Please mention a valid server member").setColor(0x1ae6b3));
	if(!member.kickable) return message.reply(embed.addField('ERROR', "Unable to kick mentioned user").setColor(0x1ae6b3));

	// The reason for their ban
	let reason = args.slice(1).join(' ');
	if(!reason) reason = "No reason provided";
	
	// Actual removal of user 
	await member.ban(reason)
	.catch(error => message.reply(embed.addField('ERROR', `Sorry ${message.author} I couldn't ban because of : ${error}`)).setColor(0x1ae6b3));
	message.reply(embed.addField('BANNED', `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`).setColor(0x1ae6b3));

  
};
  
  // Help Object
module.exports.help = {
	name: "Ban",
	description: "Bans a user from the server",
	usage: "!ban (user)",
	category: "Admin",
	aliases: [""]
};