
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config");
const prefixl = config.prefix


client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('nothing', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/minecraftcowboy'
      });
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if (msg.channel.id === config.ChannelID ){
        if (!msg.content.startsWith('"')){
            msg.reply('quotes must start with `"`');
            msg.delete();
        }
    }
});


// client.login(process.env.token);
client.login(config.BotToken);