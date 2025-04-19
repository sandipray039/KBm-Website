import React, { useState } from 'react';

interface Member {
  id: number;
  name: string;
  title: string;
  img: string;
  desc: string;
}

const Aboutpage = () => {
  const [members] = useState<Member[]>([
    {
      id: 1,
      name: 'Vijay Kumar Mahto',
      title: 'Member',
      img: '/images/kbm2/bijaykumarmahto.jpeg',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
    },
    {
      id: 2,
      name: 'Amlesh Kumar Mahto',
      title: 'Member',
      img: '/images/kbm2/man.jpg',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
    },
    {
      id: 3,
      name: 'Birju Mahto',
      title: 'Member',
      img: '/images/kbm2/birjumahto.jpeg',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
    },
    {
      id: 4,
      name: 'Pradeep Kumar',
      title: 'Member',
      img: '/images/kbm2/pradeepkumar.jpeg',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
    },
  ]);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Khatiyani Budhijeevi Manch (KBM)</h1>

        <div className="about-section">
          <p>
            <strong>Khatiyani Budhijeevi Manch (KBM)</strong> began its journey in 2010 from a small village called Nikchitpur (Galgai) in Dumri block of Giridih district, Jharkhand. At that time, the village was in a very poor condition. People were far from education, healthcare services were bad, there were no means of employment, and social evils like dowry, superstition, black magic, and frequent fights were prevalent.
          </p>
          <p>
            There was a lack of mutual respect among elders, youth, and children, and most villagers were addicted to intoxicants. Trees and forests were being exploited, even small plants were being cut down, and fires were intentionally set in the forests.
          </p>
          <p>
            Seeing these problems, intellectuals of the village united with a broader mission of social reform. This vision focused on education, health, environment, employment, sports, de-addiction, and elimination of social evils, aiming to transform the village into an ideal model village.
          </p>

          <h2>Initial Steps</h2>
          <p>
            A dilapidated community building in the village was renovated and free reform classes were provided for children and youth. Daily general classes were held for children of all age groups. Regular monthly tests, quizzes, debates, moral education, drawing competitions, entertainment programs, dramas, dance, singing, and indoor games like carrom and chess were introduced.
          </p>

          <h2>Outdoor Sports Training</h2>
          <p>
            Students were trained by professional coaches in sports like running, karate, yoga, silambam, wrestling, boxing, cricket, volleyball, and football. Children began participating in district, state, and national level competitions.
          </p>

          <h2>Parent Awareness Meetings</h2>
          <ul>
            <li>👉 How to take proper care of children</li>
            <li>👉 How to lead a happy family life</li>
            <li>👉 How to get rid of addiction</li>
            <li>👉 How to avoid antisocial behavior</li>
            <li>👉 How to eliminate superstitions and social evils</li>
            <li>👉 How to generate employment</li>
            <li>👉 How to avoid conflicts and disputes</li>
          </ul>

          <h2>Expansion</h2>
          <p>
            Gradually, more people joined, and the community began to see benefits. Our efforts spread to neighboring villages:
          </p>
          <ul>
            <li>Galgai</li>
            <li>Hursodih</li>
            <li>Madedih</li>
            <li>Thakurchak</li>
            <li>Shankardih</li>
            <li>Jaridih</li>
          </ul>

          <p>Beyond Giridih, we reached:</p>
          <ul>
            <li>Sadhariyadih (Bokaro)</li>
            <li>Singhdih (Dhanbad)</li>
          </ul>

          <h2>Annual Activities</h2>
          <ul>
            <li>Career Counseling</li>
            <li>Blood Donation Camps</li>
            <li>Tree Plantation Drives</li>
            <li>Cleanliness Campaigns</li>
            <li>Adventure Camps and Picnics</li>
            <li>Stationery Distribution to Poor Children</li>
            <li>Awareness Campaigns on Education</li>
            <li>Library Establishment</li>
            <li>Coaching for Competitive Exams</li>
            <li>Forest Fire Control</li>
            <li>Women Empowerment Shows</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            Despite severe financial crises and political interference, KBM never gave up. In 2016, I got a job in the railways and had to leave, along with many volunteers. Activities slowed down.
          </p>

          <h2>Reconstruction</h2>
          <p>
            I contacted friends and restarted social work by forming an “Employees Group.” Over time, this movement spread across various districts and continued with the same goal.
          </p>

          <h2>Famous Village Movements</h2>
          <ul>
            <li>👉 2015 – Bhagirath Mahto and team – Taranari (Bokaro)</li>
            <li>👉 2015 – Prem Kumar – Shibutand Tupkadi (Chas)</li>
            <li>👉 2017 – Arjun Kumar Mahto – Aharidih (Bokaro)</li>
            <li>👉 2020 – Mukesh Kumar Mahto – Nero Panchayat (Dhanbad)</li>
            <li>👉 2020 – Naresh Kumar Mahto – Birni Panchayat (Bokaro)</li>
            <li>👉 2021 – Mukesh Kumar Mahto – Karitand (Chas)</li>
          </ul>

          <h2>Grand Conference</h2>
          <p>
            On January 28, 2024, a grand conference was organized at Topchanchi Lake, Dhanbad, with intellectuals from across Jharkhand. KBM was officially established with the following goals:
          </p>

          <ul>
            <li>✅ Promote education</li>
            <li>✅ Ensure better healthcare services</li>
            <li>✅ Protect the environment</li>
            <li>✅ Generate employment opportunities</li>
            <li>✅ Encourage sports and fitness</li>
            <li>✅ Eliminate social evils</li>
          </ul>

          <p>
            Our mission is to spread this movement to every village in Jharkhand and build a strong network of ideal villages that represent progressive rural transformation.
          </p>

          <div style={{ marginTop: "40px", lineHeight: 1.6 }}>
            <h2>Our Mission and Vision</h2>
            <ol style={{ paddingLeft: "20px", marginTop: "10px" }}>
              <li>Unite all intellectuals of Jharkhand and encourage them to participate in social development activities.</li>
              <li>Our mission is to make every village ideal and self-reliant.</li>
              <li>This includes quality education, better healthcare, employment opportunities, clean environment, active participation in sports, protection of cultural heritage, and elimination of social evils.</li>
              <li>There should be a learning center (reform classes) in every village where children, youth, and adults are trained mentally and physically.</li>
              <li>Organize at least one community meeting every month to discuss lifestyle improvements for villagers.</li>
              <li>Raise awareness on social issues like dowry, addiction, disputes, black magic, and mutual hatred to eliminate these harmful beliefs and practices.</li>
              <li>Create women empowerment teams in every village to resolve internal issues and stand against any kind of exploitation.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* <div className="about-members">
        <h2 className="section-heading">Our Core Members</h2>
        <div className="member-grid">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.img} alt={member.name} className="member-image" />
              <h4 className="member-name">{member.name}</h4>
              <p className="member-title">{member.title}</p>
              <p className="member-desc">{member.desc}</p>
              <button className="more-btn">More Info</button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Aboutpage;
