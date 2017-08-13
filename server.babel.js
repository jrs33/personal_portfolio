const express = require('express');
const app = express();

/* 
** Load the middleware function to the root path and use 
** the built in static middleware function to serve
** the static page in the current directory 
*/
app.use('/', express.static('.')); 

app.listen(process.env.PORT || 3000);