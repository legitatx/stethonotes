const app = require('./app');
require('dotenv').config({path: 'variables.env'});

app.set('port', process.env.PORT || 8080);
const server = app.listen(app.get('port'), () => {
  console.log(`Express server running on port ${server.address().port}!`);
});
