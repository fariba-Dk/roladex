//creating a router object then adding routes to you and export it and import it to server.js
const {Router} = require('express');
const controller = require('./controller');

const router = Router('/routes');
const pool= require('./db/db');



router.get('/', () => controller.getContacts)

module.exports = router;
