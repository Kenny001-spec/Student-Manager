const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String

    },

    duration: {
        type: Number,

    },

    completed: {
        type: Boolean,

    }
});
module.exports = Task;




