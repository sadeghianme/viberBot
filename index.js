const { ViberClient } = require('messaging-api-viber');

// get authToken from the "edit info" screen of your Public Account.
const client = ViberClient.connect('49e109f6a372816b-c610f6d1ee276b5a-4b94eeb538c8c147');
client.setWebhook('https://downforeveryoneorjustme.com/mehdibot.com').catch(error => {
    console.log('1', error); // formatted error message
    console.log('2', error.stack); // error stack trace
    console.log('3', error.config); // axios request config
    console.log('4', error.request); // HTTP request
    console.log('5', error.response); // HTTP response
});
client.setWebhook('https://downforeveryoneorjustme.com/mehdibot.com');
client.sendText('+989301590033', 'Hello');
