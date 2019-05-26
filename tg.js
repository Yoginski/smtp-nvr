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

function sendPictures(caption, images) {
  const sources = images.map(i => ({
    caption,
    type: 'photo',
    media: { source: i },
  }));
  return bot.telegram.sendMediaGroup(config.TG_CHANNEL_ID, sources);
}

module.exports = {
  initialize,
  sendPictures,
  notify,
};
