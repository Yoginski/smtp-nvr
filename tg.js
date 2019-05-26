const Telegraf = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.TG_TOKEN);

function initialize() {
  bot.on('message', ctx => console.log(ctx));
  bot.launch();
}

function notify(data) {
  bot.sendMessage(config.TG_CHANNEL_ID, data);
  console.log(data);
}

module.exports = {
  initialize,
  notify,
};
