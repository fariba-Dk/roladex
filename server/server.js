const express = require('express')
const app = express()
const contactRoutes = require('./routes')
const pool = require('./db/db')

//const cors = require('cors')


const PORT = 3007

app.use(express.json())
//using this path then we send this route
// localhost:3007/api/v1/contacts
//we get Just connected server.js to routes.js via router const in server.js api routes.



app.get('/', (req, res)=>{
  res.send('Hey....')
})

app.get('/contacts', async (req, res, next) => {

  const allContacts = await pool.query("SELECT * FROM contacts");

  const response = await allContacts.json()

  
})




app.listen(PORT, (req, res)=>{
  console.log(`Server is running on ${PORT}`)
})


