const Discord = require('discord.js'); 
const client = new Discord.Client();
const http = require('http');

http.createServer((req, res) => {
res.writeHead(200, {
    'Content-type': 'text/plain'
});
    res.write('Hey');
    res.end();
}).listen(4000);

client.login('NjUyNDU2MDE4MDIxNzExODc0.Xepfog.EZ6rNwj0fuiwq-dPkq8V6pfD-ms');

client.on('ready', () => {
console.log('The bot is ready');
});

client.on('message', (msg) => {
if (msg.content.includes('bot')) {
    msg.reply('Did you mention me?');
}
});