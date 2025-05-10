import { useState } from "react";


interface Volunteer {
  id: number;
  name: string;
  image: string;
  bio: string;
  text: string;
  working?: string; // Optional property added
}


const Volunter = () => {
  const [volunteers] = useState<Volunteer[]>([
    {
      id: 1,
      name: "Central President",
      image: "/images/about/Vijay.jpg",
      bio: "Vijay is a passionate social worker who helps children and the elderly.",
      text: "Bijay Kumar Mahto",
      working: "Retd.CI"
    },
    
    {
      id: 5,
      name: "Central Co-ordinator",
     
      image: "/images/kbm2/birjumahto.jpeg",
     
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a assumenda doloribus, ipsum perferendis ad sunt mollitia debitis, ratione aspernatur aliquid. Perspiciatis aliquid quibusdam accusantium. Voluptate beatae qui, porro expedita dolores suscipit numquam repudiandae deserunt minus reiciendis ipsum? Dolores nostrum facilis laudantium cupiditate esse ipsam, ipsum ut architecto, reiciendis mollitia sapiente delectus debitis vero nemo laboriosam unde temporibus repellendus? Iusto quis soluta voluptates, vero consectetur, quaerat facilis debitis dicta harum perspiciatis rerum quo exercitationem, commodi enim? Ullam laborum alias quam assumenda enim? Eius assumenda repellat similique reiciendis, in dicta dolore iste corporis explicabo, nihil eum id cumque sequi eligendi ratione.",
      text: "Birju Mahto",
      working: "Social Activist"
    },
    
    {
      id: 3,
      name: "Central secretary",
      image: "/images/about/Amlesh.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Amlesh Kumar",
      working: "Social Activist"
    },
    {
      id: 3,
      name: "Central Vice President ",
      image: "/images/about/B.N MAHTO.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "B.N Mahto",
      working: "Retd.INDIAN RAILWAYS"
    },
    {
      id: 3,
      name: "Advisior/guider",
      image: "/images/about/Ashok.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Ashok Kumar",
      working: "Retd. Prof NIT Jameshdpur"
    },
    {
      id: 3,
      name: "Central IT Head",
      image: "/images/about/Naresh.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Naresh Kumar Mahto",
      working: "Software Engineer"
    },
    {
      id: 3,
      name: " IT Cell Member",
      image: "/images/about/Dindyal.png",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Dindyal Mahto",
      working: "Professor"
    },
    {
      id: 3,
      name: "IT Cell Member",
      image: "/images/about/sujit.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Sujit Kumar Mahto",
      working: "Software Engineer"
    },
    {
      id: 3,
      name: "Central IT Head",
      image: "/images/about/Dindyal.png",
      bio: "Alex manages events and volunteers for major outreach programs.",
      text: "Naresh Kumar Mahto",
      working: "Software Engineer"
    },
    

    
    
  ]);

  return (
    <section id="team" className="bg-silver-light">
      <div className="container">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h2 className="text-uppercase line-bottom-center mt-0">
                Central{" "}
                <span className="text-theme-colored font-weight-600">
                  Committiee
                </span>
              </h2>
              <div className="title-icon">
                <i className="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>
                Meet our amazing Committiee who are changing lives every day.
              </p>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className="row multi-row-clearfix">
            {volunteers.map((vol) => (
              <div key={vol.id} className="col-xs-12 col-sm-6 col-md-4 mb-30">
                <div className="team-member clearfix">
               
                 
                    <div className="team-thumb">
                      <img
                        src={vol.image}
                        alt={vol.name}
                        style={{height:'35vh',width:'100%',borderRadius:"15px"}}
                      />
                      <div className="overlay">
                        <div className="content"></div>
                      </div>
                    </div>
               

                  <div className=" bg-theme-colored"
                  style={{position:'relative',borderRadius:'20px',marginTop:'3px',textAlign:'center',padding:'0px',}}
                  >
                    <h3 className="mt-5 text-white" 
                    
                    >{vol.name}</h3>
                    <h4>{vol.text}</h4>
                    
                    <h4>{vol.working}</h4>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunter;
