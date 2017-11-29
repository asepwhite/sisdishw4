#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sisdis', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql'
});
const Pings = sequelize.define('pings', {
  npm: { type: Sequelize.INTEGER,  unique: true },
  time: Sequelize.DATE
});

function init_consumer() {
  amqp.connect('amqp://sisdis:sisdis@172.17.0.3:5672', function(err, conn) {
    conn.createChannel(function(err, ch) {
      var ex = 'EX_PING';

      ch.assertExchange(ex, 'fanout', {durable: false});

      ch.assertQueue('', {exclusive: true}, function(err, q) {
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
        ch.bindQueue(q.queue, ex, '');

        ch.consume(q.queue, function(msg) {
          var strMessage = msg.content.toString();
          var message = JSON.parse(strMessage)
          console.log(messsage)
          // Pings.findOrCreate({where: {npm: message.npm}, defaults: {ts: message.ts}})
          console.log(msg.content.toString());
        }, {noAck: true});
      });
    });
  });
}

var consumer  = init_consumer;
module.exports = consumer
