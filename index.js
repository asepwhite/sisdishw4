var amqp = require('amqplib/callback_api');
// amqp://sisdis:sisdis@172.17.0.3:5672
amqp.connect('amqp://sisdis:sisdis@172.17.0.3:5672', function(err, conn) {
  console.log(err)
  console.log(conn)
  console.log("wwkwkwk");
  conn.createChannel(function(err, ch) {
    var ex = 'EX_PING';
    var msg = process.argv.slice(2).join(' ') || 'Hello World!';

    ch.assertExchange(ex, 'fanout', {durable: false});
    ch.publish(ex, '', new Buffer(msg));
    console.log(" [x] Sent %s", msg);
  });

  setTimeout(function() { conn.close(); process.exit(0) }, 1);
});