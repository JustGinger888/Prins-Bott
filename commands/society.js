const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

module.exports.run = async (bot, message, args) => {

	const channel = message.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
        
    //Sends the arguments to suggestion channel
    const reply = embed.addField(`Suggestion from ${message.author.tag}\n`, args.join(' ')).setColor(0x1ae6b3);
    channel.send(reply); 
    message.delete().catch(vanish_=>{}); 
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Society Information",
	description: "Displays information for the Computing Society",
	usage: "!society",
	category: "Custom",
	aliases: [""]
  };