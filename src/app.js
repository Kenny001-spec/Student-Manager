const express = require('express');
const { findById } = require('./db/models/students');
require('./db/mongoose');
const studentRoute = require('../src/Routes/studentRoute');
const taskRoute = require('../src/Routes/taskRoute');
const bcrypt = require('bcryptjs');



const app = express();
app.use(express.json());
app.use(studentRoute);
app.use(taskRoute);



// config
const port = process.env.PORT || 5000;

// TESTING BCRYPT
const hashPass = async () => {
    const pass = 'RedArmy877';
    const hash = await bcrypt.hash(pass, 8);
    const isMatch = await bcrypt.compare('RedArmy877', hash);

    console.log('PASS::::::::>', pass);
    console.log('hash::::::::>', hash);
    console.log('isMatch::::::::>', isMatch);
}
hashPass();







// route.get('/', (req, res) => {
//     res.send('<h1>This is the Homepage</h1>');
// });





app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})