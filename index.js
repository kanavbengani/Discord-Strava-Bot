const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzcwMzU2NDQyMzAwNDE2MDQy.X5cYWA.h3hCetbNJUwFJe8kzQ-4a4Nbmos';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg => {
    if (msg.content === "say smth") {
        msg.reply('AJITESH MAKE UR RUNS PUBLIC!');
    }
})

bot.login(token);