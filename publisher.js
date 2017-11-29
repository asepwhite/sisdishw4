var amqp = require('amqplib/callback_api');
// amqp://sisdis:sisdis@172.17.0.3:5672
amqp.connect('amqp://sisdis:sisdis@172.17.0.3:5672', function(err, conn) {
  console.log(conn)
  conn.createChannel(function(err, ch) {
    console.log("berhasil create channel")
    var ex = 'EX_PING';
    var msg = process.argv.slice(2).join(' ') || 'Hello World!';

    ch.assertExchange(ex, 'fanout', {durable: false});
    ch.publish(ex, '', new Buffer(msg));
    console.log(" [x] Sent %s", msg);
  });
  console.log("HUHEUEHEUEU")

  // setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
