#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://sisdis:sisdis@172.17.0.3:5672', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'EX_PING';

    ch.assertExchange(ex, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      ch.bindQueue(q.queue, ex, '');

      ch.consume(q.queue, function(msg) {
        console.log("prepare to receive message")
        console.log(" [x] %s", msg.content.toString());
      }, {noAck: true});
    });
  });
});