import React, { useState } from 'react';

interface member {
    id: number;
    name: string;
    title: string;
    img: string;
    desc: string;
  }

const Aboutpage = () => {

    const [members] = useState([
        {
          id: 1,
          name: 'Vijay Kumar Mahto',
          title: 'Member',
          img: '/images/kbm2/bijaykumarmahto.jpeg',
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
        },
        {
          id: 2,
          name: 'Amlesh Kumar Mahto',
          title: 'Member',
          img: '/images/kbm2/man.jpg',
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
        },
        {
          id: 3,
          name: 'Birju Mahto',
          title: 'Member',
          img:  '/images/kbm2/birjumahto.jpeg',
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
        },
        {
            id: 4,
            name: 'Pradeep Kumar',
            title: 'Member',
            img:  '/images/kbm2/pradeepkumar.jpeg',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In dignissimos minima excepturi blanditiis obcaecati totam necessitatibus modi consectetur, pariatur soluta, vel dolorum quod repellendus est cupiditate, reprehenderit magni doloremque quidem id! Laborum dolores ipsum, corrupti aut totam labore non, perferendis quo excepturi ad porro! Totam ad architecto vel voluptatem dolorum ducimus laboriosam tempora temporibus! Saepe nemo blanditiis harum cumque consequatur aliquid velit sint beatae veniam sit. Animi fugiat earum, quam dolores alias odio, quibusdam exercitationem, molestias minima ipsum nihil reiciendis!"
          },
      ]);
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Khatiyani BuddhiJeevi Manch (KBM)</h1>

        <div className="about-section">
          <p>
            The <strong>Khatiyani Budhijeevi Manch (KBM)</strong> began its journey in 2010 from a small village called Nichitpur (Galagi), located in Dumri Block of Giridih district, in the state of Jharkhand. At that time, the condition of the village was extremely poor. People were far removed from education, healthcare was in a miserable state, there was no means of employment, and harmful social practices like dowry, superstition, witch-hunting, and frequent quarrels were prevalent.
          </p>
          <p>
            Elders, youth, and children did not respect each other, and most of the villagers were addicted to substances. Trees and forests were being exploited, with even small plants being cut down, and forest fires were deliberately set.
          </p>
          <p>
            Witnessing these problems, the intellectuals of the village came together and formed a group with a strong mission of comprehensive social transformation. The vision encompassed improvements in education, health, environment, employment, sports, de-addiction, and eradication of social evils, with the ultimate aim of transforming the village into an ideal model village.
          </p>

          <h2>Initial Steps</h2>
          <p>
            A dilapidated community building in the village was repaired and used to provide free remedial classes to children and youth. Daily basic classes were organized for children of all age groups. Regular monthly tests, quizzes, debates, moral education, painting competitions, entertainment programs, drama, dance, singing, and indoor games like carrom and chess were introduced.
          </p>

          <h2>Outdoor Sports Training</h2>
          <p>
            Students were trained in running, karate, yoga, silambam, wrestling, boxing, cricket, volleyball, and football by professional trainers. Children began representing the district, state, and even participating in national-level events.
          </p>

          <h2>Parental Awareness Meetings</h2>
          <ul>
            <li>👉 How to take proper care of children</li>
            <li>👉 How to live a happy family life</li>
            <li>👉 How to overcome addiction</li>
            <li>👉 How to prevent anti-social behavior</li>
            <li>👉 How to eradicate superstitions and social evils</li>
            <li>👉 How to generate employment</li>
            <li>👉 How to avoid conflicts and fights</li>
          </ul>

          <h2>Expansion</h2>
          <p>
            Gradually, more people joined, and the community started seeing the benefits. Our efforts expanded into nearby villages:
          </p>
          <ul>
            <li>Galagi</li>
            <li>Hursodih</li>
            <li>Madeydih</li>
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
            <li>Career counseling</li>
            <li>Blood donation camps</li>
            <li>Tree plantation drives</li>
            <li>Cleanliness campaigns</li>
            <li>Adventure camps and picnics</li>
            <li>Distribution of stationery to underprivileged children</li>
            <li>Awareness campaigns on education</li>
            <li>Establishing libraries</li>
            <li>Coaching for competitive exams</li>
            <li>Forest fire control</li>
            <li>Women empowerment shows</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            Despite facing severe financial shortages and political interference, KBM persisted. In 2016, I got a job in the Railways and had to leave, along with many volunteers. Activities slowed down.
          </p>

          <h2>Revival</h2>
          <p>
            I reconnected with friends and formed an "Employee Group." We resumed social work during holidays. Over time, this movement spread to various districts with the same goal.
          </p>

          <h2>Notable Village Movements</h2>
          <ul>
            <li>👉 2015  Bhagirath Mahato & team – Taranari (Bokaro)</li>
            <li>👉 2015  Prem Kumar – Shibutand Tupkadi (Chas)</li>
            <li>👉 2017  Arjun Kumar Mahato – Aharidih (Bokaro)</li>
            <li>👉 2020  Mukesh Kumar Mahato – Nero Panchayat (Dhanbad)</li>
            <li>👉 2020  Naresh Kumar Mahato – Birni Panchayat (Bokaro)</li>
            <li>👉 2021  Mukesh Kumar Mahato – Karitand (Chas)</li>
          </ul>

          <h2>The Grand Convention</h2>
          <p>
            On 28 January 2024, a grand convention was held at Topchanchi Lake in Dhanbad, with intellectuals from across Jharkhand. KBM was officially formed with goals of:
          </p>

          <ul>
            <li>✅ Promoting Education</li>
            <li>✅ Ensuring better Healthcare</li>
            <li>✅ Preserving the Environment</li>
            <li>✅ Creating Employment Opportunities</li>
            <li>✅ Encouraging Sports & Fitness</li>
            <li>✅ Eliminating Social Evils</li>
          </ul>

          <p>
            Our mission is to expand this movement to every village across Jharkhand and build a strong network of model villages representing progressive rural transformation.
          </p>
          <div style={{ marginTop: "40px", lineHeight: 1.6, }}>
      <h2>Our Mission & Vision</h2>
      <ol style={{ paddingLeft: "20px", marginTop: "10px" }}>
        <li>To unite intellectuals across Jharkhand and encourage them to participate in social development activities.</li>
        <li>Our mission is to transform every village in Jharkhand into an ideal and self-reliant one.</li>
        <li>This includes ensuring quality education, better healthcare, employment opportunities, a clean environment, active sports involvement, preserving our cultural values, and eradicating social evils.</li>
        <li>Every village should have a learning center (remedial classes) where children, youth, and adults are trained mentally and physically.</li>
        <li>Conduct at least one community meeting every month to discuss ways to improve the lifestyle of villagers.</li>
        <li>Raise awareness on social issues like dowry, addiction, disputes, witch-hunting, and mutual hatred, to eliminate these harmful superstitions and practices.</li>
        <li>In every village, form a dedicated women's empowerment team to address internal issues and prepare them to stand against any form of exploitation.</li>
      </ol>
    </div>
        </div>
      </div>

      <div className="about-members">
        <h2 className="section-heading">Our Core Members</h2>
        <div className="member-grid">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.img} alt={member.name} className="member-image" />
              <h4 className="member-name">{member.name}</h4>
              <p className="member-title">{member.title}</p>
              <p className="member-desc">{member.desc}</p>
              <button className="more-btn">More Details</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Aboutpage;
