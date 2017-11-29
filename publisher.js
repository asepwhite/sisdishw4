var amqp = require('amqplib/callback_api');
var moment = require('moment')

function init_publisher(){
  amqp.connect('amqp://sisdis:sisdis@172.17.0.3:5672', function(err, conn) {
    console.log(conn)
    conn.createChannel(function(err, ch) {

      var ex = 'EX_PING';
      var currTime = new Date(Date.now());
      currTime = moment(currTime).format("YYYY-MM-DD HH:mm:ss");
      var msg = '[x] {"action":"ping","npm":"1406623064","ts":"'+currTime+'"}';
      ch.assertExchange(ex, 'fanout', {durable: false});
      sendPing(ch, ex);
    });

  });

}

function sendPing(ch, ex){
  setTimeout(function() {
    console.log("publish message")
    ch.publish(ex, '', new Buffer(msg));
   }, 500);
}

var publisher = init_publisher;
module.exports = publisher
