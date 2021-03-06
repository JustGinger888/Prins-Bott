const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	const embed = new Discord.RichEmbed()
    // Calculating round-trip latency
    const m = await message.channel.send("Ping?");
    message.delete().catch(vanish_=>{}); 
    m.edit(embed.addField('Pong!', `Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`).setColor(0x1ae6b3));
    
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Ping",
	description: "Calculates round-trip latency",
	usage: "!ping",
	category: "Standard",
	aliases: [""]
  };