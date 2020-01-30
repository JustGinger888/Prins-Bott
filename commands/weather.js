const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("/Users/ethan/Desktop/Computing Discord Bot/config");
const Token = config.weatherToken;


module.exports.run = async (bot, message, args) => {

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=Southampton&APPID=${Token}`)
	.then(response => {
		return response.json()
	})
	.then(parsedWeather => {
		const embed = new Discord.RichEmbed()
		.addField('Weather', 
		'Forecast    : ' +parsedWeather.weather[0].main + '\n'+
		'Low Temp: ' +Math.round((parsedWeather.main.temp_min -273.15)) + '°C' + '\n'+
		'High Temp: ' +Math.round((parsedWeather.main.temp_max -273.15)) + '°C' + '\n'+
		'Current Temp: ' +Math.round((parsedWeather.main.temp -273.15)) + '°C' + '\n'
		)
		.setColor(0x1ae6b3);
		message.delete().catch(vanish_=>{}); 
		message.channel.send(embed);
	})
  };
  
  // Help Object
  module.exports.help = {
	name: "Southampton Weather Forecast",
	description: "Displays the weather forecasr for Southampton",
	usage: "!weather",
	category: "Media",
	aliases: [""]
  };