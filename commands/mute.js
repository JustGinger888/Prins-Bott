const fs = module.require('fs');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed();
  // Check perms, self, rank, etc
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed.addField(`Error`, 'You do not have Permission to mute!').setColor(0x1ae6b3));
  const toMute = message.mentions.members.first()
  if (!toMute) return message.channel.send(embed.addField(`Error`, 'You did not specify a user mention or ID!').setColor(0x1ae6b3));
  if (toMute.id === message.author.id) return message.channel.send(embed.addField(`Error`, 'You can not mute yourself!').setColor(0x1ae6b3));
  if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send(embed.addField(`Error`, 'You can not mute a member that is equal to or higher than yourself!').setColor(0x1ae6b3));

  // Check if the user has the mutedRole
  const mutedRole = message.guild.roles.find(mR => mR.name === 'Muted');

  // If the mentioned user does not have the muted role execute the following
  if (!mutedRole) {
    try {
      // Create a role called "Muted"
      mutedRole = message.guild.createRole({
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

  // If the mentioned user already has the "mutedRole" then that can not be muted again
  if (toMute.roles.has(mutedRole.id)) return message.channel.send(embed.addField(`Error`, 'This user is already muted!').setColor(0x1ae6b3));

  // TODO: Check they they have entered a valid number or even entered one


  // Add the mentioned user to the "mutedRole" and notify command sender
  toMute.addRole(mutedRole);

  fs.writeFile('./muted.json', JSON.stringify(bot.muted, null, 4), err => {
    if (err) throw err;
    message.channel.send(embed.addField(`Success`, `I have muted ${toMute.user.tag}!`).setColor(0x1ae6b3));
  });
};

module.exports.help = {
  name: 'Mute',
  description: "Mutes a user on the entire server",
	usage: "!mute (user)",
	category: "Admin",
	aliases: [""]
};