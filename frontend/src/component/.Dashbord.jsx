import React from 'react'

function Dashbord() {
  return (
    <div>
      <div class="flex h-screen bg-gray-100">


<div class="hidden md:flex flex-col w-64 bg-gray-800">
    <div class="flex items-center justify-center h-16 bg-gray-900">
        <span class="text-white font-bold uppercase"> Dashboard</span>
    </div>
    <div class="flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4 bg-gray-800">
            <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
           
          </svg>
                Home
            </a>
            <a href="/remindersection" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            
          </svg>
                 Add Reminder 
            </a>
           
            <a href="/reminderlist" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
           
          </svg>
                Reminder List
            </a>
            
        </nav>
    </div>
</div>


<div class="flex flex-col flex-1 overflow-y-auto">
    
    <div class="p-4">
        <h1 class="text-2xl font-bold flex justify-center "> Event Reminder System </h1>
        
    </div>
</div>

</div>
    </div>
  )
}

export default Dashbord
