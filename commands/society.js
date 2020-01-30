const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

module.exports.run = async (bot, message, args) => {

  let society = {
    meetingDay : "Wednesday Afternoons in JM312",
    president : "James Whale",
    vicePresident : "Honour Hewett",
    treasurer : "John Hawkins",
    monthlyPubs : "*To Be Announced*",
    nextHackathon: "Hack The South",
  }

  embed.title('Society Information')
  .addField('Meeting', society.meetingDay)
  .addField('The Big 3', society.president +'\n'+ society.vicePresident +'\n'+ society.treasurer)
  .addField('Monthly Pub List', society.monthlyPubs)
  .addField('Next HAckathon', society.nextHackathon)
  .setColor(0x1ae6b3);
	message.channel.send(embed);
      
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Society Information",
	description: "Displays information for the Computing Society",
	usage: "!society",
	category: "Custom",
	aliases: [""]
  };