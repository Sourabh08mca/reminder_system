const mongoose = require('mongoose')

const ReminderSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String
})

const ReminderModel = mongoose.model('reminders', ReminderSchema)
module.exports = ReminderModel