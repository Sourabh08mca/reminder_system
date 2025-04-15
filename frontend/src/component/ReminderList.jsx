import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ReminderList() {
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    fetchReminders()
  }, [])

  const fetchReminders = () => {
    axios.get("http://localhost:3001/reminderlist")
      .then(result => setReminders(result.data))
      .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/reminderlist/deleteReminder/${id}`)
      .then(res => {
        console.log(res.data)

        setReminders(reminders.filter(reminder => reminder._id !== id))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1 className='flex justify-center text-4xl'>Reminder List</h1>
      <ul className="space-y-3 p-6 max-w-xl mx-auto">
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <li key={index} className="border p-3 rounded flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{reminder.title}</h4>
                <p className="text-sm text-gray-600">{reminder.description}</p>
                <p className="text-sm text-gray-600">{reminder.date}</p>
              </div>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDelete(reminder._id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No reminders found.</p>
        )}
      </ul>
    </div>
  )
}

export default ReminderList
