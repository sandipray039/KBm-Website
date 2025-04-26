import React, { useState } from "react";
import { createEvent } from "../Services/ApiService";

const EventForm: React.FC = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
  });

  const [errors, setErrors] = useState({
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventLocation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!eventData.eventName) {
      formErrors.eventName = "Event name is required.";
      isValid = false;
    }
    if (!eventData.eventDate) {
      formErrors.eventDate = "Event date is required.";
      isValid = false;
    }
    if (!eventData.startTime) {
      formErrors.startTime = "Start time is required.";
      isValid = false;
    }
    if (!eventData.endTime) {
      formErrors.endTime = "End time is required.";
      isValid = false;
    }
    if (!eventData.eventLocation) {
      formErrors.eventLocation = "Event location is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
   try{
    const payload = {
      eventName: eventData.eventName,
      eventDate: eventData.eventDate,
      startTime: eventData.startTime,
      endTime: eventData.endTime,
      location: eventData.eventLocation, 
    };
    const response=await createEvent(payload);
    console.log(response.data);
    alert("event created succesfully...");

   }
   catch(e){
    console.log(e);
   }

      setEventData({
        eventName: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        eventLocation: "",
      });
      setErrors({
        eventName: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        eventLocation: "",
      });
    }
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container-fluid">
      <h3 className="text-center font-30">Add New Event</h3>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <div
          className="col-md-6 mb-20"
          style={{
            padding: "15px 40px",
            border: "2px solid #c2c1c1",
            borderRadius: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                className="form-control"
                name="eventName"
                value={eventData.eventName}
                onChange={handleInputChange}
                placeholder="Enter event name"
              />
              {errors.eventName && (
                <div className="text-danger">{errors.eventName}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Event Date</label>
              <input
                type="date"
                className="form-control"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleInputChange}
                onFocus={(e) => e.target.showPicker?.()}
                min={today}
              />
              {errors.eventDate && (
                <div className="text-danger">{errors.eventDate}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Start Time</label>
              <input
                type="time"
                className="form-control"
                name="startTime"
                value={eventData.startTime}
                onChange={handleInputChange}
                onFocus={(e) => e.target.showPicker?.()}
              />
              {errors.startTime && (
                <div className="text-danger">{errors.startTime}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">End Time</label>
              <input
                type="time"
                className="form-control"
                name="endTime"
                value={eventData.endTime}
                onChange={handleInputChange}
                onFocus={(e) => e.target.showPicker?.()}
                
              />
              {errors.endTime && (
                <div className="text-danger">{errors.endTime}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Event Location</label>
              <input
                type="text"
                className="form-control"
                name="eventLocation"
                value={eventData.eventLocation}
                onChange={handleInputChange}
                placeholder="Enter event location"
              />
              {errors.eventLocation && (
                <div className="text-danger">{errors.eventLocation}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-10 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
