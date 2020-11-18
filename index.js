const Discord = require('discord.js');
const bot = new Discord.Client();
const discordToken = 'NzcwMzU2NDQyMzAwNDE2MDQy.X5cYWA.vMswEKxLlay8h4FtL7K7IwGNn0g';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg => {
    if (msg.content.includes("boyd")) {
        msg.delete();
    }
})

bot.on('message', msg => {
    if (msg.member.id === "599024150283157514") {
        msg.reply("I asked..");
    }
})

bot.on('message', msg => {
    let channel = "";
    if (msg.content === "$m") {
        msg.guild.voiceStates.cache.forEach(element => {
            if (element.id === msg.member.id) {
                channel = element.channelID;
            }
        });
        let count = 0;
        msg.guild.voiceStates.cache.forEach(element => {
            if (element.channelID === channel) {
                element.setMute(true);
                count += 1;
            }
        });
        // msg.channel.send("All " + count + " have been muted");
    }
    if (msg.content === "$u") {
        msg.guild.voiceStates.cache.forEach(element => {
            if (element.id === msg.member.id) {
                channel = element.channelID;
            }
        });
        let count = 0;
        msg.guild.voiceStates.cache.forEach(element => {
            if (element.channelID === channel) {
                element.setMute(false);
                count += 1;
            }
        });
        // msg.channel.send("All " + count + " have been unmuted");
    }
});

bot.login(discordToken);