const { SMTPServer } = require('smtp-server');
const { simpleParser } = require('mailparser');
const config = require('./config');
const tg = require('./tg');

tg.initialize();

const server = new SMTPServer({
  logger: true,
  banner: 'NVR smtp to telegram forwarder',
  authOptional: true,

  onConnect: (sess, callback) => {
    console.log(`Connected: ${sess.remoteAddress}`);
    callback();
  },

  onData: async (stream, sess, callback) => {
    try {
      const msg = await simpleParser(stream);
      const caption = msg.text;
      const images = msg.attachments
        .filter(a => a.contentType === 'image/jpeg')
        .map(a => a.content);
      await tg.sendPictures(caption, images);
    } catch (e) {
      await tg.notify(`Failed to process message: ${e.toString()}`)
        .catch(console.log.bind(console));
    } finally {
      callback();
    }
  },
});

server.listen(config.SMTP_PORT, config.SMTP_HOST);
