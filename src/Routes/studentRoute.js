const express = require('express');
const Student = require('../db/models/students');



route = new express.Router();
// app.use(route);


// HOW TO CREATE A NEW RESOURCES

route.post('/students', async (req, res) => {

    const student = await Student(req.body);
    try {
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send(err);
    }


})




// HOW TO READ ALL RESOURCES

route.get('/students', async (req, res) => {

    try {
        const students = await Student.find({});
        // await Student.find();
        res.status(200).send(students);
    } catch (err) {
        res.status(400).send(err);
    }
})

// REASDING SINGLE RESOURCE
route.get('/students/:id', async (req, res) => {
    const ID = await req.params.id;
    try {
        const student = await Student.findById(ID);
        res.status(200).send(student);
    } catch (err) {
        res.status(200).send(err);
    }

})

// UPDATING SINGLE RESOURCE
route.patch('/students/:id', async (req, res) => {
    const ID = await req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdate = ['school', 'courses'];
    const isValid = updates.every(update => allowedUpdate.includes(update));

    if (!isValid) {
        res.status(400).send({ error: 'Invalid update' });
    }

    try {
        const student = await Student.findByIdAndUpdate(ID, req.body, { new: true, runValidators: true });
        await student.save();
        res.status(200).send(student);
    } catch (err) {
        res.status(200).send(err);
    }
})

// DELETING SINGLE RESOURCE
route.delete('/students/:id', async (req, res) => {
    const ID = await req.params.id;
    try {
        const student = await Student.findByIdAndDelete(ID);
        res.status(200).send(student);
    } catch (err) {
        res.status(200).send(err);
    }
})

module.exports = route;



