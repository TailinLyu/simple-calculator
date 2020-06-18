const admin = require("firebase-admin");

//The serviceAccountKey has been hidden.
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://calculator-tailin.firebaseio.com"
});

const db = admin.database();
const ref = db.ref('records')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const server = app.listen(port);

//WebSocket
const io = require('socket.io').listen(server)
io.origins("*:*")
io.on('connection', socket => {
  socket.on('new result', function(msg){
    io.emit('rerender', msg);
  });
})

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json())
// Put all API endpoints under '/api'

// HTTP GET request to get the first ten records
app.get('/api/records', (req, res) => {
  var arrayResult = []
  const query = ref.orderByChild("timeStamp").limitToFirst(10)
  query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      arrayResult.push(childSnapshot.val().value);
  });
  res.json(arrayResult)
});
})

// HTTP POST request to post a new result
app.post(`/api/records`, (req, res) =>{
  const recordTime = req.body['time']
  const recordVal = req.body['value']
  
  db.ref('/records').push({
    "timeStamp": recordTime,
    "value": recordVal
  })
  res.status(200)
  res.send("Success!")
} )

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'build','index.html'));
});


console.log(`Calculator Backend listening on ${port}`);