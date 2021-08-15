const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the srver'
  })
});


const PORT = 5050 || process.env.PORT;
app.listen(PORT,()=>console.log('server started on port '+ PORT))