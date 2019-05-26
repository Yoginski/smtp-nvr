require('dotenv').config();

module.exports = {
  TG_TOKEN: process.env.TG_TOKEN,
  TG_CHANNEL_ID: process.env.TG_CHANNEL_ID,
  SMTP_PORT: process.env.SMTP_PORT || 2525,
  SMTP_HOST: process.env.SMTP_HOST || '0.0.0.0',
};
