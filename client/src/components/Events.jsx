import React from 'react'
import axiosInstance from '../axiosInstance'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axiosInstance.get('/api/events')
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
            <h2>{event.name}</h2>
            
            <p>Organized by: {event.organizer.name}</p>
            <Link  to={`/events/${event._id}`}>Details</Link>
            
        </div>)}
    </div>
  )
}

export default Events