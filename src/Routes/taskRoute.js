const express = require('express');
const Task = require('../db/models/Task');

route = new express.Router();

// HOW TO CREATE A NEW RESOURCES

route.post('/tasks', async (req, res) => {

    const task = await Task(req.body);
    try {
        await task.save();
        res.status(400).send(task);
    } catch (err) {
        res.status(200).send(err);
    }
})

module.exports = route;



// HOW TO READ ALL RESOURCES

route.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({});

        res.status(200).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
})


// REASDING SINGLE RESOURCE
route.get('/tasks/:id', async (req, res) => {
    const ID = await req.params.id;
    try {
        const task = await Task.findById(ID);
        res.status(200).send(task);
    } catch (err) {
        res.status(200).send(err);
    }

})


// UPDATING SINGLE RESOURCE
route.patch('/tasks/:id', async (req, res) => {
    const ID = await req.params.id;
    try {
        const task = await Task.findByIdAndUpdate(ID, req.body, { new: true, runValidators: true });
        await task.save();
        res.status(200).send(task);
    } catch (err) {
        res.status(200).send(err);
    }
})