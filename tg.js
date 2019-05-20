const Telegraf = require('telegraf');
const config = require('./config');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('Hi'));
