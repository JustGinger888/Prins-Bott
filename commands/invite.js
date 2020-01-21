const embed = new Discord.RichEmbed();


module.exports.run = async (bot, message, args) => {

	let invite = await message.channel.createInvite({
		maxAge: 10 * 60 * 1000, //maximum time for the invite, in milliseconds
		maxUses: 1 //maximum times it can be used
	  }, `Requested with command by ${message.author.tag}`).catch(console.log);
	
	  message.reply(embed.addField("Here's your invite:", invite));
  
  };
  
  // Help Object
  module.exports.help = {
	name: "",
	description: "",
	usage: "",
	category: "",
	aliases: [""]
  };