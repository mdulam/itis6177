var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const port = 3000

app.get('/', (req, res) => {
    
    res.send('Hello World!')
    //res.sendFile('index.html', {root : __dirname})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))