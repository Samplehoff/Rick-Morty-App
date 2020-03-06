const express = require('express');
const path = require('path');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8000;



app.use(express.static(path.join(__dirname, 'build')))


app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'))
});



app.listen(PORT, function() {
    console.log('server listening on port:' + PORT)
})