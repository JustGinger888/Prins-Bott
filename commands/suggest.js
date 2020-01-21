//Requires

module.exports.run = async (bot, message, args) => {

	const channel = message.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
        const embed = new Discord.RichEmbed();
        
        //Sends the arguments to suggestion channel
        const reply = embed.addField(`Suggestion`, args.join(' ')).setColor(0x1ae6b3); //from ${message.author.tag}\n
        channel.send(reply); 
        message.delete().catch(vanish_=>{}); 
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Suggestion",
	description: "Make an annonymous suggestion for improvements or events",
	usage: "!suggest (message)",
	category: "Custom",
	aliases: [""]
  };