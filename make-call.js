var accountSid = 'ACd77a02d46681b003fa1a688b77579b1e';
var token = 'ab2521d42555b6aa600e4ff0e87c9308';

var client = require('twilio')(accountSid, token);

 client.calls.create({
   url: 'https://handler.twilio.com/twiml/EH509afe2ff3cdf44018588c9e3d9086c2',
   to: '+17034156746',
   from: '+12408235801'
 }, function(err,call){
   if(err){
     console.log(err);
   }
   else{
     console.log(call.sid);
   }
 })
