const fs = module.require('fs');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  // Check perms, self, rank, etc
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(embed.addField(`Error`, 'You do not have Permission to unmute!').setColor(0x1ae6b3));
  const unMute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!unMute) return message.channel.send(embed.addField(`Error`, 'You did not specify a user mention or ID!').setColor(0x1ae6b3));
  if (unMute.highestRole.position >= message.member.highestRole.position) return message.channel.send(embed.addField(`Error`, 'You can not unmute a member that is equal to or higher than yourself!').setColor(0x1ae6b3));

  // Check if the user has the mutedRole
  const mutedRole = message.guild.roles.find(mR => mR.name === 'Muted');

  // If the mentioned user or ID does not have the "mutedRole" return a message
  if (!mutedRole || !unMute.roles.has(mutedRole.id)) return message.channel.send(embed.addField(`Error`, 'This user is not muted!').setColor(0x1ae6b3));

  // Remove the mentioned users role "mutedRole", "muted.json", and notify command sender
  await unMute.removeRole(mutedRole);

  unMute.removeRole(mutedRole);

  fs.writeFile('./muted.json', JSON.stringify(bot.muted), err => {
    if (err) throw err;
    message.channel.send(embed.addField(`Success`, `I have unmuted ${unMute.user.tag}!`).setColor(0x1ae6b3));
  });
};

module.exports.help = {
  name: 'Unmute',
	description: "Unmute a user that was previously muted",
	usage: "!unmute (user)",
	category: "Admin",
	aliases: [""]
};