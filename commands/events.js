const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

	const febEmbed = new Discord.RichEmbed("February 2020", 
		"4	18:30 - 19:30	Winchester Creatives Monthly Meetup (Winchester)\n"+
		"4	17:30 - 19:30	BCS Workshop: Onwards from the Prawn Cocktail (Southampton)\n"+
		"10	17:30 - 19:30	BCS Workshop: Being Right is Not Good Enough (Southampton)\n"+
		"11	09:00 - 17:00	TeenTech Manchester (Manchester)\n"+
		"11	19:00 - 21:00	Agile South Coast Meetup (Southampton)\n"+
		"13 12:00			GreenIT 2020 Student and Open competitions Deadline (Online)\n"+
		"19	09:30 - 16:30	The Evolution of Story (Southampton)\n"+
		"20	19:00 - 21:00	Developer South Coast Meetup (Southampton)")
		.setColor(0x1ae6b3);
	
		const marEmbed = new Discord.RichEmbed("March 2020",
		"3	18:30 - 19:30	Winchester Creatives Monthly Meetup (Winchester)\n"+
		"7		(Sat)10:00- (Sun)17:00		R.U. Hacking? 2020: 24-Hour Student Hackathon (Reading)\n"+
		"10	18:30 - 20:30	Agile South Coast Southampton (Southampton)\n"+
		"11-12 	(Wed)09:00- (Thu)17:00		Cloud and Cyber Security Expo (London)\n"+
		"12-13 	(Thu)09:00- (Fri)17:00		DigiFest 2020 (Birmingham)\n"+
		"13 12:00			BCS AGD SG Artefact 2020 Competition Deadline (Online)\n"+
		"27 09:30 - 15:30	VentureFest South (Southampton)")
		.setColor(0x1ae6b3);

		const aprEmbed = new Discord.RichEmbed("April 2020",
		"6-7 (Mon)08:30- (Tue)17:00		British Conference for Undergraduate Research (BCUR) (Leeds)\n"+
		"7 	18:30 - 19:30	Winchester Creatives Monthly Meetup (Winchester)\n"+
		"14	18:30 - 20:30	Agile South Coast Southampton (Southampton)")
		.setColor(0x1ae6b3);

		const mayEmbed = new Discord.RichEmbed("May 2020",
		"1 	12:00			BCS e-Learning SG 2020 International Power Point Competitions Deadline (Online)\n"+
		"5 	18:30 - 19:30	Winchester Creatives Monthly Meetup (Winchester)\n"+
		"12	18:30 - 20:30	Agile South Coast Southampton (Southampton)")
		.setColor(0x1ae6b3);

		if (args.shift() === "feb") return febEmbed;
		else if (args.shift() === "mar") return marEmbed;
		else if (args.shift() === "apr") return aprEmbed;
		else if (args.shift() === "may") return marEmbed;
  
  
  };
  
  // Help Object
  module.exports.help = {
	name: "Events",
	description: "Lists all upcoming events found on the SOL Computing page",
	usage: "!events (3 letters of month)",
	category: "Custom",
	aliases: [""]
  };