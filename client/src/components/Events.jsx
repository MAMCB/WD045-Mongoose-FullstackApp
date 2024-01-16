import React from 'react'
import axiosInstance from '../axiosInstance'
import { useState,useEffect } from 'react'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axiosInstance.get('/events')
        .then((response) => {
            setEvents(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[events])

  return (
    <div>
        <h1>Events</h1>
        {events.length > 0 && events.map((event) =><div key={event.id}> 
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>Organized by: {event.organizer.name}</p>
        </div>)}
    </div>
  )
}

export default Events