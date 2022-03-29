//we want to query from db
const pool = require('./db/db.js')


const getContacts = (req, res) => {

  pool.query("SELECT * From contacts", (error, results)=>{

    if (error) throw error;
    res.status(200).json(results.rows)
  })
}
module.exports = {getContacts,}
