//Requires

module.exports.run = async (bot, message, args) => {

	const channel = message.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
        const embed = new Discord.RichEmbed();
        
        //Sends the arguments to suggestion channel
        const reply = embed.addField(`Suggestion from ${message.author.tag}\n`, args.join(' ')).setColor(0x1ae6b3);
        channel.send(reply); 
        message.delete().catch(vanish_=>{}); 
  
  };
  
  // Help Object
  module.exports.help = {
	name: "",
	description: "",
	usage: "",
	category: "",
	aliases: [""]
  };