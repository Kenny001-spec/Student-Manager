const mongoose = require('mongoose');

const Student = mongoose.model('Student', {
    fullName: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    matricNo: {
        type: String,
        required: true,

    },
    courses: {
        type: Array,
        required: true
    }
})
module.exports = Student;