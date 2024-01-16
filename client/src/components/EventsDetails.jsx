import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axiosInstance from '../axiosInstance'

const EventsDetails = () => {
    const { id } = useParams()
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/api/events/${id}`).then((response)=>setEvent(response.data)).catch((error)=>console.log(error))
    },[event])
  return (
    <div>
        <h1>Event Details</h1>
        {event && <div>
            <h2>{event.name}</h2>
            <p>Organized by: {event.organizer.name}</p>
            <p>Description: {event.description}</p>
            <p>Attendees: {event.attendees.length}</p>
            <ul>
                {event.attendees.map((attendee) => <li key={attendee.id}>{attendee.name}</li>)}
            </ul>
            
             </div>}
    </div>
  )
}

export default EventsDetails