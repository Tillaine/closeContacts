const express = require('express');
const morgan = require('morgan')
const routes = require('./router.js')
const cors = require('cors');


const app = express()
// ***********************************
// middleware
// ***********************************
// logging requests 
app.use(morgan('dev'))
//cross site access
app.use(cors());
//turning requests into json
app.use(express.json());



app.use(express.static('./client/dist'));

app.use('/api/contacts', routes);

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
