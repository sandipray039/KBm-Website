import React, { useState } from "react";

interface EventItem {
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
}

const monthMap: { [key: string]: number } = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const events: EventItem[] = [
    {
      date: "28",
      month: "Feb",
      title: "Event: Help The Children",
      time: "5.00 pm - 7.30 pm",
      location: "25 Newyork City.",
    },
    {
      date: "26",
      month: "Oct",
      title: "Event: Foods For Poor",
      time: "6.00 pm - 8.30 pm",
      location: "25 Newyork City.",
    },
    {
      date: "12",
      month: "Dec",
      title: "Event: Save The Water",
      time: "4.00 pm - 6.00 pm",
      location: "25 Newyork City.",
    },
    {
      date: "15",
      month: "May",
      title: "Event: Education Drive",
      time: "3.00 pm - 5.00 pm",
      location: "Sunrise School, LA",
    },
    {
      date: "01",
      month: "Jun",
      title: "Event: Free Health Camp",
      time: "10.00 am - 2.00 pm",
      location: "Downtown Clinic, Boston",
    },
  ];

  const getEventDate = (event: EventItem) =>
    new Date(
      new Date().getFullYear(),
      monthMap[event.month],
      parseInt(event.date)
    );

  const filteredEvents = events.filter((event) => {
    const eventDate = getEventDate(event);
    const today = new Date();
    if (filter === "past") return eventDate < today;
    if (filter === "upcoming") return eventDate >= today;
    return true;
  });

const active={
    backgroundColor:"#00A4EF",
    color:"white",
   
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">
          <div
            className="d-flex justify-content-between my-3 text-center"
            style={{ marginTop: "20px" }}
          >
          <button
  className="btn"
  style={filter === "all" ? active : { marginRight: "15px" }}
  onClick={() => setFilter("all")}
>
  All
</button>
            <button
              className='btn'
              style={filter === "past" ? active : { marginRight: "10px" }}
              onClick={() => setFilter("past")}
            >
              Past
            </button>
            <button
              className="btn"
              style={filter === "upcoming" ? active : { marginRight: "10px" }}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
          </div>

          <h3 className="line-bottom border-bottom mt-0 ms-5" >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
          </h3>

          <div>
            {filteredEvents.map((event, index) => (
              <div
              
                key={index}
                style={{borderBottom:'1px solid black'}}
              >
                <div className="row">
                  <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
                    <div className="event-date text-center bg-theme-colored p-2">
                      <ul className="list-unstyled">
                        <li className="h4 text-white font-weight-bold">
                          {event.date}
                        </li>
                        <li className="font-20 text-white text-uppercase">
                          {event.month}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="event-content mt-3">
                      <h5 className="font-16 font-weight-600">
                        <a href="#">{event.title}</a>
                      </h5>
                      <ul className="list-inline font-weight-600 text-muted">
                        <li className="list-inline-item">
                          <i className="fa fa-clock-o text-theme-colored me-2"></i>
                          {event.time}
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
            ))}

            {filteredEvents.length === 0 && (
              <p className="ms-5 mt-4">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
