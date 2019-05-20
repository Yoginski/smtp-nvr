const Telegraf = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.TG_TOKEN);

bot.start(ctx => ctx.reply('Hi'));
