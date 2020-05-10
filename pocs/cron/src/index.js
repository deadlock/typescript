var http = require('http');
var cron = require('node-cron');
 
var server = http.createServer();

server.listen(8080, function() {
    cron.schedule('10 13 * * *', () => {
        console.log('Running cron at 13:10');
      });
}); 