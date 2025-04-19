import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section>
      <div className="container pb-30">
        <div className="section-content">
          <div className="row">
            {/* Mission Content */}
            <div className="col-md-8 pb-sm-20">
              <h3 className="line-bottom mt-0">Our Mission</h3>
              <div className="row">
                {[
                  {
                    icon: 'flaticon-charity-shaking-hands-inside-a-heart',
                    title: 'Save The children',
                    text: 'Children are the future, and they deserve safety, education, healthcare, and love. ',
                  },
                  {
                    icon: 'flaticon-charity-shelter',
                    title: 'Help The Helpless',
                    text: 'Millions of people around the world struggle daily with hunger, homelessness, and hopelessness. ',
                  },
                  {
                    icon: 'flaticon-charity-responsible-use-of-water',
                    title: 'Pure Water For Poor',
                    text: 'Clean water is a basic human right, yet millions still live without it. Contaminated water leads .',
                  },
                  {
                    icon: 'flaticon-charity-make-a-donation',
                    title: 'Donation for poor',
                    text: 'A small donation can bring a big change. For the poor, it means food, clothes, shelter, education, and hope.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="col-xs-12 col-sm-6 col-md-6">
                    <div className="icon-box left media bg-silver-light border-1px border-theme-colored p-15 mb-20">
                      <a className="media-left pull-left flip" href="#">
                        <i className={`${item.icon} text-theme-colored`}></i>
                      </a>
                      <div className="media-body">
                        <h4 className="fs-6 text-uppercase">{item.title}</h4>
                        <p className="fs-5">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3 className="line-bottom border-bottom mt-0">Upcoming Events</h3>
              {[
                {
                  date: '28',
                  month: 'Feb',
                  title: 'Event: Help The Children',
                  time: '5.00 pm - 7.30 pm',
                  location: '25 Newyork City.',
                },
                {
                  date: '26',
                  month: 'OCT',
                  title: 'Event: Foods For Poor',
                  time: '6.00 pm - 8.30 pm',
                  location: '25 Newyork City.',
                },
                {
                  date: '12',
                  month: 'DEC',
                  title: 'Event: Save The Water',
                  time: '4.00 pm - 6.00 pm',
                  location: '25 Newyork City.',
                },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className={`event media sm-maxwidth400 ${
                    idx < 2 ? 'border-bottom' : ''
                  } mt-5 mb-0 pt-10 pb-15`}
                >
                  <div className="row">
                    <div className="col-xs-2 col-md-3 pr-0">
                      <div className="event-date text-center bg-theme-colored border-1px p-0 pt-10 pb-10 sm-custom-style">
                        <ul>
                          <li className="fs-2 text-white fw-bold">{event.date}</li>
                          <li className="fs-5 text-white text-center text-uppercase">{event.month}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-9 pr-10 pl-10">
                      <div className="event-content mt-10 p-5 pb-0 pt-0">
                        <h5 className="media-heading fs-6 fw-semibold">
                          <a href="#">{event.title}</a>
                        </h5>
                        <ul className="list-inline fw-semibold text-gray-dimgray">
                          <li>
                            <i className="fa fa-clock-o text-theme-colored"></i> {event.time}
                          </li>
                          <li>
                            <i className="fa fa-map-marker text-theme-colored"></i> {event.location}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
