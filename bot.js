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


    // Help command to display avalible 
    if(command === "help") {
        //defining embeded Help
        const embed = new Discord.RichEmbed()
        .setDescription('The list of commands (TO_BE) implemented.')
        .addField('!events TBA', 'Lists all of the upcoming events found on SOL Computing Channel.', true)
        .addField('!society TBA', 'Displays details about the Solent Computing Society schedule.', true)
        .addField('!translate TBA', 'Translates text from a detected language into a target language.', false)
        .addField('!say', 'Make Prins-Bott say anything you want.', true)
        .addField('!purge', 'Deletes # of messages in a channel.',true)
        .addField('!suggest', 'Allows a user to make a suggestion, posted to suggestions channel.', false)
        .addField('!mute TBA', 'Mutes a specified user in the server.',true)
        .addField('!unmute TBA', 'Unmutes a specified user in the server.', true)
        .addField('!invite TBA', 'Generates an invite link which the bot then posts it in the server.', false)
        .addField('!kick', 'Kick a specified User from the Server.', true)
        .addField('!ban', 'Ban a specified User from the Server.', true)
        .addField('!softban TBA', 'Soft Bans a User from the Server by removing their messages and kicks them.', false)
        .addField('!youtube TBA', 'Search for a video found on YouTube.', true)
        .addField('!urban TBA', 'Search definitions on Urban Dictionary.', true)
        .addField('!ping', 'Displays the Ping of both the Server and Bot and returns pong cause why not.', false)
        .addField('!imgur TBA', 'Search for pictures and memes on imgur.', true)
        .addField('!giphy TBA', 'Search for your desired Gifs using Giphy.', true)
        .addField('!weather TBA', 'Gets the weather forecast for Southampton and displays it in server.', false)
        .setFooter('Feel free to leave some command suggestions or add them yourself!')
        .setColor(0x1ae6b3)
        .setTitle("Prins-Bot Commands")
        .setURL("https://github.com/JustGinger888/Prins-Bott");
        
        message.channel.send(embed);
    }
    //done
    
    // Lists events for Computing courses gotten from SOL
    if(command === "events") {}

    // Lists society description, plans and events for the month
    if(command === "society") {}

    // Translates detected text using google translate api
    if(command === "translate") {}

    // Making the bot say something and delete the  users message
    if(command === "say") {
        // Joining the ARGS back into a string with spaces 
        const sayMessage = args.join(" ");
        // Deleting the users command
        message.delete().catch(vanish_=>{}); 
        // Bot responds to say message
        message.channel.send(sayMessage);
    }
    //done
    
    // Removes up to 100 messages from users in the channel
    if(command === "purge") {
    
        // Get delete count
        const deleteCount = parseInt(args[0], 10);
        
        // Checking Lenghth
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        
        // Get messages and delete them
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
    //done

    // Suggestions, can include improvements for society or commands to be added
    if(command === "suggest") {
        const channel = message.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions 
        const embed = new Discord.RichEmbed();
        
        //Sends the arguments to suggestion channel
        const reply = embed.addField(`Suggestion from ${message.author.tag}:\n`, args.join(' ')).setColor(0x1ae6b3);
        channel.send(reply); 
        message.delete().catch(vanish_=>{}); 
    }

    // Mute a user
    if(command === "mute") {
        const embed = new Discord.RichEmbed();

        // Checks
        if(!message.member.roles.some(r=>["Admin"].includes(r.name))) return message.channel.send(embed.addField('ERROR', 'You do not have Permission to mute!').setColor(0x1ae6b3));
        const toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!toMute) return message.channel.send(embed.addField('ERROR', 'You did not specify a user mention or ID!').setColor(0x1ae6b3));
        if (toMute.id === message.author.id) return message.channel.send(embed.addField('ERROR', 'You can not mute yourself!').setColor(0x1ae6b3));
        if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send(embed.addField('ERROR', 'You can not mute a member that is equal to or higher than yourself!').setColor(0x1ae6b3));

        // Check if the user has the muted Role
        const mutedRole = message.guild.roles.find(mR => mR.name === 'Muted');

        // If the mentioned user does not have muted
        if (!mutedRole) {
            try {
            // Create a role called "Muted"
            mutedRole = await message.guild.createRole({
                name: 'Muted',
                color: '#000000',
                permissions: []
            });

            // Prevent the user from sending messages or reacting to messages
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(mutedRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
                });
            });
            } catch (e) {
            console.log(e.stack);
            }
        }

        // If the mentioned user already is muted
        if (toMute.roles.has(mutedRole.id)) return message.channel.send(embed.addField('ERROR', `${toMute.user.tag} is already muted!`).setColor(0x1ae6b3));

        
        // Notification
        await toMute.addRole(mutedRole)
        .catch(error => message.reply(embed.addField('ERROR', `Sorry ${message.author} I couldn't kick because of : ${error}`).setColor(0x1ae6b3)));
        message.channel.send(embed.addField('Muted', `${toMute.user.tag} has been muted!`).setColor(0x1ae6b3));
        
    }

    // Unmute a user
    if(command === "unmute") {
        
    }

    // Create invite link to share
    if(command === "invite") {}

    // Kick users from server
    if(command === "kick") {
        // Limiting kick to "admin" role through hardcoding role names
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
        return message.reply("You don't have permissions to use this!");
        
        // Validates the kicking of a memebr by checking for their existance 
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.reply("Please mention a valid server member");
        if(!member.kickable) return message.reply("Unable to kick mentioned user");
        
        // The reason for their kick
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        // Actual removal of user 
        await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }
    //done
    
    // Ban is a permanent removal of user 
    if(command === "ban") {
        // Only admins can ban
        if(!message.member.roles.some(r=>["Admin"].includes(r.name)) )
        return message.reply("You don't have permissions to use this!");
        
        // Validates the ban of a memebr by checking for their existance 
        let member = message.mentions.members.first();
        if(!member) return message.reply("Please mention a valid server member");
        if(!member.kickable) return message.reply("Unable to kick mentioned user");

        // The reason for their ban
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        
        // Actual removal of user 
        await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    }
    //done

    // Semi permanent removal of user
    if(command === "softban") {}

    // Search for a youtube video
    if(command === "youtube") {}

    // Search a definition on urban dictionary
    if(command === "urban") {}
    
    // Basic Ping-Pong Command to check Ping
    if(command === "ping") {
        // Calculating round-trip latency
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
    //done

    // Search for an image on iimgur
    if(command === "imgur") {}

    // Search for a gif on giphy
    if(command === "giphy") {}

    // Display weather of southampton
    if(command === "weather") {}

});

bot.login(config.token);