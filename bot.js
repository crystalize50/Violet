const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
    	message.channel.send('PONG!');
  	}
});

 client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'Bing') {
    	message.send('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.send('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'hi Violet', 'hi, Violet', 'Hi Violet', 'Hi, Violet') {
    	message.reply('Hello!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
