const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	const febEmbed = new Discord.RichEmbed()
	.addField("February 2020", 
		"4th	@18:30 - 19:30 	\nWinchester Creatives Monthly Meetup (Winchester)\n\n"+
		"4th	@17:30 - 19:30	\nBCS Workshop: Onwards from the Prawn Cocktail (Southampton)\n\n"+
		"10th	@17:30 - 19:30 	\nBCS Workshop: Being Right is Not Good Enough (Southampton)\n\n"+
		"11th	@09:00 - 17:00	\nTeenTech Manchester (Manchester)\n\n"+
		"11th	@19:00 - 21:00	\nAgile South Coast Meetup (Southampton)\n\n"+
		"13th 	@12:00			\nGreenIT 2020 Student and Open competitions Deadline (Online)\n\n"+
		"19th	@09:30 - 16:30	\nThe Evolution of Story (Southampton)\n\n"+
		"20th	@19:00 - 21:00	\nDeveloper South Coast Meetup (Southampton)")
		.setColor(0x1ae6b3);
	
		const marEmbed = new Discord.RichEmbed()
		.addField("March 2020",
		"3rd		@18:30 - 19:30				\nWinchester Creatives Monthly Meetup (Winchester)\n\n"+
		"7th		@(Sat)10:00 - (Sun)17:00	\nR.U. Hacking? 2020: 24-Hour Student Hackathon (Reading)\n\n"+
		"10th		@18:30 - 20:30				\nAgile South Coast Southampton (Southampton)\n\n"+
		"11-12th 	@(Wed)09:00 - (Thu)17:00	\nCloud and Cyber Security Expo (London)\n\n"+
		"12-13th	@(Thu)09:00 - (Fri)17:00	\nDigiFest 2020 (Birmingham)\n\n"+
		"13th		@12:00						\nBCS AGD SG Artefact 2020 Competition Deadline (Online)\n\n"+
		"27th 		@09:30 - 15:30				\nVentureFest South (Southampton)")
		.setColor(0x1ae6b3);

		const aprEmbed = new Discord.RichEmbed()
		.addField("April 2020",
		"6-7th 	@(Mon)08:30- (Tue)17:00		\nBritish Conference for Undergraduate Research (BCUR) (Leeds)\n\n"+
		"7th 	@18:30 - 19:30				\nWinchester Creatives Monthly Meetup (Winchester)\n\n"+
		"14th	@18:30 - 20:30				\nAgile South Coast Southampton (Southampton)")
		.setColor(0x1ae6b3);

		const mayEmbed = new Discord.RichEmbed()
		.addField("May 2020",
		"1st 	@12:00			\nBCS e-Learning SG 2020 International Power Point Competitions Deadline (Online)\n\n"+
		"5th 	@18:30 - 19:30	\nWinchester Creatives Monthly Meetup (Winchester)\n\n"+
		"12th	@18:30 - 20:30	\nAgile South Coast Southampton (Southampton)")
		.setColor(0x1ae6b3);

		message.delete().catch(vanish_=>{}); 
		
		if (args.shift() === "feb") 
		{
			message.channel.send(febEmbed);
		}
		else if (args.shift() === "mar") 
		{
			message.channel.send(marEmbed);
		}
		else if (args.shift() === "apr") 
		{
			message.channel.send(aprEmbed);
		}
		else if (args.shift() === "may") 
		{
			message.channel.send(marEmbed);
		}
		else{
			message.channel.send(new Discord.RichEmbed('Error', "Invalid month"));
		}
  
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Events",
	description: "Lists all upcoming events found on the SOL Computing page",
	usage: "!events (3 letters of month)",
	category: "Custom",
	aliases: [""]
  };