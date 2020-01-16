var DiscordIO = require('discord.io');
var logger = require('winston');
const Discord = require("discord.js");
const bot = new Discord.Client();

// Load config.json that contains token and prefix value 
const config = require("/Users/ethan/Desktop/Computing Discord Bot/config.json");


// Event runs if the bot starts, and logs in, successfully.
bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});


// Event runs when the bot joins guild
bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});


// Event triggers when bot is removed from guild
bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});



bot.login(config.token);