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


// Event runs on every message received from any channel or DM
bot.on("message", async message => {

    //Ignoring messages from other bots or without prefix
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    // Separating cmd NAME and ARGS 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    

    // Basic Ping-Pong Command to check usability
    if(command === "ping") {
        // Calculating round-trip latency
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
    

    // Making the bot say something and delete the  users message
    if(command === "say") {
        // Joining the ARGS back into a string with spaces 
        const sayMessage = args.join(" ");
        // Deleting the users command
        message.delete().catch(vanish_=>{}); 
        // Bot responds to say message
        message.channel.send(sayMessage);
    }
    

    // Kick users from server
    if(command === "kick") {
        // Limiting kick to "admin" role through hardcoding role names
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
        
        // Validates the kicking of a memebr by checking for their existance 
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.reply("Please mention a valid server member");
        if(!member.kickable) return message.reply("Unable to kick mentioned user");
        
    }
});

bot.login(config.token);