var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const axios = require('axios');


const port = 3000

app.get('/', (req, res) => {
    
     const info = axios.get('https://4klsamncg8.execute-api.us-east-2.amazonaws.com/prod')
    .then((response) => {
        res.send(response.data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))