const Discord = require('discord.js'); 
const client = new Discord.Client();
const http = require('http');


client.on('ready', () => {
console.log('The bot is ready');
});

client.on('message', (msg) => {
if (msg.content.includes('bot')) {
    msg.reply('Did you mention me?');
}
});

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
});

client.login(process.env.NjUyNDU2MDE4MDIxNzExODc0.Xepfog.EZ6rNwj0fuiwq-dPkq8V6pfD-ms);//BOT_TOKEN is the Client Secret