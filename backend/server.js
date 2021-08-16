const express = require('express');
var cors = require('cors')




const app = express();
app.use(cors())




app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the firrst server slashh'
  })
});
app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'SALAm',
  })
})



const PORT = 5050 || process.env.PORT;
app.listen(PORT, () => console.log('server started on port ' + PORT))
module.exports = app;