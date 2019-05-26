const Telegraf = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.TG_TOKEN);

function initialize() {
  bot.on('message', ctx => console.log(ctx));
  return bot.launch();
}

function notify(data) {
  console.log(data);
  return bot.telegram.sendMessage(config.TG_CHANNEL_ID, data);
}

function sendImage(caption, source) {
  return bot.telegram.sendPhoto(config.TG_CHANNEL_ID, { source }, { caption });
}

module.exports = {
  initialize,
  sendImage,
  notify,
};
