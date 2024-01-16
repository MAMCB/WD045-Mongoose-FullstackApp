import React from 'react'
import { useParams } from 'react-router-dom'

const EventsDetails = () => {
    const { id } = useParams()
  return (
    <div>EventsDetails</div>
  )
}

export default EventsDetails