const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ReminderModel = require('./models/Reminder')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/reminder_system")

app.get('/reminderlist', (req, res) =>{
    ReminderModel.find({})
    .then(reminders => res.json(reminders))
    .catch(err => res.json(err))
})


app.delete('/reminderlist/deleteReminder/:id', (req, res) => {
    const id = req.params.id;
    ReminderModel.findByIdAndDelete(id)
      .then(() => res.json("Reminder deleted"))
      .catch(err => res.status(400).json("Error: " + err));
  });
  

app.post("/remindersection" , (req, res) => {
   ReminderModel.create(req.body)
   .then(reminders => res.json(reminders))
   .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})