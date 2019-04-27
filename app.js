const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'files/' 
}); 

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

app.listen(2000, () => console.log("Listening on port: 2000") );
