import React, { useEffect, useState } from "react";

interface EventItem {
  eventName: string;
  eventDate: string; 
  startTime: string; 
  endTime: string;   
  location: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
  
    fetch("https://localhost:7212/api/Member/get-all-events")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

       
        if (Array.isArray(data.data)) {
          setEvents(data.data);
        } else if (Array.isArray(data.events)) {
          setEvents(data.events);
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.eventDate);
    const today = new Date();
    if (filter === "past") return eventDate < today;
    if (filter === "upcoming") return eventDate >= today;
    return true;
  });

  const active = {
    backgroundColor: "#00A4EF",
    color: "white",
  };

  const getFormattedDateParts = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = dateObj.toLocaleString("default", { month: "short" });
    return { day, month };
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">
          <div className="d-flex justify-content-between my-3 text-center" style={{marginTop:'30px'}}>
            <button
              className="btn "
              style={filter === "all" ? active : { marginRight: "15px",padding:'10px 15px' }}
              onClick={() => setFilter("all")}
            >
              All Events
            </button>
            <button
              className="btn"
              style={filter === "past" ? active : { marginRight: "10px" }}
              onClick={() => setFilter("past")}
            >
              Past Events
            </button>
            <button
              className="btn"
              style={filter === "upcoming" ? active : { marginRight: "10px" }}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming Events
            </button>
          </div>

          <h3 className="line-bottom border-bottom mt-0 ms-5">
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
          </h3>

          <div className="mb-20">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => {
                const { day, month } = getFormattedDateParts(event.eventDate);
                return (
                  <div key={index} style={{ borderBottom: "1px solid black" }}>
                    <div className="row">
                      <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
                        <div className="event-date text-center bg-theme-colored p-2">
                        
                         <ul className="list-unstyled" >
                            <li className="h4 text-white font-weight-bold">{day}</li>
                            <li className="font-20 text-white text-uppercase">{month}</li>
                          </ul>
                      
                        </div>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="event-content mt-3">
                          <h5 className="font-16 font-weight-600">
                            <a href="#">{event.eventName}</a>
                          </h5>
                          <ul className="list-inline font-weight-600 text-muted">
                            <li className="list-inline-item">
                              <i className="fa fa-clock-o text-theme-colored me-2"></i>
                              {event.startTime} - {event.endTime}
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-map-marker text-theme-colored me-2"></i>
                              {event.location}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="ms-5 mt-4">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
