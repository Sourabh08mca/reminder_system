import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReminderSection = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()
    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/remindersection",{title,description,date})
        .then(result =>{ 
          console.log(result)
          navigate('/reminderlist')
        })
        .catch(err => console.log(err))

    }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded mt-20">

      <form onSubmit={Submit}>
      <h2 className="text-xl font-bold mb-4">My Reminders</h2>
      
      {/* Form */}
      <div className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          className="w-full border p-2 rounded"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-red-500"
        >
          Add Reminder
        </button>
      </div>

      
      </form>
    </div>
  );
};

export default ReminderSection;
