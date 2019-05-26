const { SMTPServer } = require('smtp-server');
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

  onData: (stream, sess, callback) => {
    let content = '';
    stream.on('data', (d) => { content += d; });
    stream.on('end', () => {
      tg.notify(content);
      callback();
    });
  },
});

server.listen(config.SMTP_PORT, config.SMTP_HOST);
