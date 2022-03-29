const express = require('express')
const app = express()

//const cors = require('cors')


const PORT = 3007

app.get('/', (req, res)=>{
  res.send('Hey....')
})







app.listen(PORT, (req, res)=>{
  console.log(`Server is running on ${PORT}`)
})

// CREATE TABLE contacts (
INSERT INTO contacts (first_name, last_name, email, cell_phone, address, dob, notes) VALUES ('Al', 'Jolie', 'ff@gmail.com', '310-555-3333', '12 Pine Ave Los Angeles CA 90077', '1994-10-10', 'none');

