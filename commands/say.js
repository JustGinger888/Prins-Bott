const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed();
    // Joining the ARGS back into a string with spaces 
    const sayMessage = embed.addField(`Message`, args.join(" ")).setColor(0x1ae6b3);
    // Deleting the users command
    message.delete().catch(vanish_=>{}); 
    // Bot responds to say message
    message.channel.send(sayMessage);
  
  };
  
  // Help Object
  module.exports.help = {
	name: "say",
	description: "",
	usage: "",
	category: "",
	aliases: [""]
  };