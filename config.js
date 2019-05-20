require('dotenv').config();

module.exports = {
    TG_TOKEN: process.env.TG_TOKEN,
    SMTP_PORT: process.env.SMTP_PORT || 2525,
    SMTP_HOST: process.env.SMTP_HOST || '0.0.0.0',
};
