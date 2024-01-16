import React from 'react'
import { useState,useEffect } from 'react'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'

const NewEvent = () => {
  const navigate = useNavigate();
  const [submit,setSubmit]=useState(false);
  const [newEvent,setNewEvent]=useState({});
  const formData = new FormData();
  

    useEffect(()=>{submit &&
      axiosInstance
        .post("/api/events",formData)
        .then((response) => navigate("/events"))
        .catch((error) => console.log(error));
    },[submit])

    const handleName = (e)=>{
      setNewEvent({...newEvent,name:e.target.value});
      formData.append("name",e.target.value);

    }

    const handleDescription = (e)=>{
      setNewEvent({ ...newEvent,description: e.target.value });
      formData.append("description", e.target.value);
    }
    const handleLocation = (e)=>{
      setNewEvent({ ...newEvent, location: e.target.value });
      formData.append("location", e.target.value);
    }

    const handleOrganizer = (e)=>{
      setNewEvent({ ...newEvent, organizer: e.target.value });
      formData.append("organizer", e.target.value);
    }

    const handleFile = (e)=>{
     setNewEvent({...newEvent,image:e.target.value});
     formData.append("image", e.target.value);
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      setSubmit(true);
    }


  return (
    <div>
      <h1>Create new event</h1>
      <form action="">
        <input type="text" onChange={handleName} placeholder="Event name" />
        <input type="text" onChange={handleDescription} placeholder="Description" />
        <input type="text" onChange={handleLocation} placeholder="Location" />
        <input type="text" onChange={handleOrganizer} placeholder="Organizer" />
        <input type='file' onChange={handleFile} placeholder='upload event image'/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default NewEvent