const Discord = require('discord.js');
const pubs = [
	'The Hobbit',
	'The Guide Dog',
	'The Shooting Star',
	'The Rockstone',
	'The Alexandra Hotel',
	'London Road Brew House',
	'BrewDog Southampton',
	'The Bedford',
	'The Giddy Bridge',
	'The Scholars Arms',
	'ONeills Southampton',
	'Yates Southampton',
	'The Angel',
	'The Duke Of Wellington',
	'The Red Lion',
	'Platform Tavern',
	'The White Star Tavern',
	'The Bookshop Alehouse',
	'The Cricketers',
	'Revolution Southampton',
	'The Lion',
	'Belgium And Blues',
	'The Vestry Restaurant and Bar',
	'The Mayflower Village',
	'Slug & Lettuce Southampton',
	'104 Southampton',
	'All Bar One Southampton',
	'The Standing Order',
	'Dancing Man Brewery',
	'The Admiral Sir Lucius Curtis',
	'Pitcher & Piano Southampton',
	'The Chapel Arms',
	'Orange Rooms Southampton',
	'The Social',
	'Heartbreakers',
	'Kingsland Tavern'
];

module.exports.run = async (bot, message, args) => {

	//const command = args.shift().toLowerCase();

	const monthDSP = [];
	var count = 0;
	if (args.shift() === "month") {
		for (let index = 0; index < 4; index++) {
			for (let j = 0; j < monthDSP.length; j++) {
				if (pubs[index] === monthDSP[j]) {
					count++;
					if (count === 2) {
						index--;
						count = 0;
					}
				}
				else{
					monthDSP.push(pubs[index]);
				}
			}
		}
		const embed = new Discord.RichEmbed()
		.addField('Generated Pubs', monthDSP)
		.setColor(0x1ae6b3);
		message.channel.send(monthDSP);
	}
	else{
		var index = Math.floor(Math.random() * pubs.length);
		const embed = new Discord.RichEmbed()
		.addField('Generated Pub', pubs[index])
		.setColor(0x1ae6b3);
		message.channel.send(embed);
	}
  };
  
  // Help Object
  module.exports.help = {
	name: "Pub Generator",
	description: "Generate a random southampton pub to go to based on number inputs",
	usage: "!pub (x)",
	category: "Custom",
	aliases: [""]
  };