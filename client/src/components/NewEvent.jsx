import React from 'react'
import { useState,useEffect } from 'react'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'

const NewEvent = () => {
  const navigate = useNavigate();
  const [submit,setSubmit]=useState(false);
  const [newEvent,setNewEvent]=useState({});
  const formData = new FormData();
  

    useEffect(()=>{submit && formData.append("name", newEvent.name);
    formData.append("description", newEvent.description);
    formData.append("location", newEvent.location);
    formData.append("organizer", newEvent.organizer);
    formData.append("image", newEvent.image);
      console.log("FormData before POST:", Array.from(formData.entries()));
      axiosInstance
        .post("/api/events",formData)
        .then((response) => navigate("/events"))
        .catch((error) => console.log(error));
    },[submit])

    const handleName = (e)=>{
      setNewEvent({...newEvent,name:e.target.value});
      // formData.append("name",e.target.value);
      // console.log(Array.from(formData.entries()));

    }

    const handleDescription = (e)=>{
      setNewEvent({ ...newEvent,description: e.target.value });
      // formData.append("description", e.target.value);
      // console.log(Array.from(formData.entries()));
    }
    const handleLocation = (e)=>{
      setNewEvent({ ...newEvent, location: e.target.value });
      // formData.append("location", e.target.value);
      // console.log(Array.from(formData.entries()));
    }

    const handleOrganizer = (e)=>{
      setNewEvent({ ...newEvent, organizer: e.target.value });
      // formData.append("organizer", e.target.value);
      // console.log(Array.from(formData.entries()));
    }

    const handleFile = (e)=>{
      
     setNewEvent({ ...newEvent, image: e.target.files[0] });
    //  formData.append("image", e.target.files[0]);
    //  console.log(Array.from(formData.entries()));
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      
     
      
      setSubmit(true);
    }


  return (
    <div>
      <h1>Create new event</h1>
      <form action="" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          onChange={handleName}
          placeholder="Event name"
        />
        <input
          type="text"
          name="description"
          onChange={handleDescription}
          placeholder="Description"
        />
        <input type="text" name='location' onChange={handleLocation} placeholder="Location" />
        <input type="text" name='organizer' onChange={handleOrganizer} placeholder="Organizer" />
        <input
          type="file"
          onChange={handleFile}
          placeholder="upload event image"
          name="image"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default NewEvent