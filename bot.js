const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjUyNDU2MDE4MDIxNzExODc0.Xep6Iw.2D8FCBpLX-Bn89ujdHvFckdsJKg);
