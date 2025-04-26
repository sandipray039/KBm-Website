import { useState } from "react";
import { Link } from "react-router-dom";

interface Volunteer {
  id: number;
  name: string;
  image: string;
  bio: string;
}

const Volunter = () => {
  const [volunteers] = useState<Volunteer[]>([
    {
      id: 1,
      name: "Sujit Kumar",
      image: "/images/about/sujit.jpg",
      bio: "Sujit is a passionate social worker who helps children and the elderly.",
    },
    {
      id: 5,
      name: "Birju Mahto",
      image: "/images/kbm2/birjumahto.jpeg",
     
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a assumenda doloribus, ipsum perferendis ad sunt mollitia debitis, ratione aspernatur aliquid. Perspiciatis aliquid quibusdam accusantium. Voluptate beatae qui, porro expedita dolores suscipit numquam repudiandae deserunt minus reiciendis ipsum? Dolores nostrum facilis laudantium cupiditate esse ipsam, ipsum ut architecto, reiciendis mollitia sapiente delectus debitis vero nemo laboriosam unde temporibus repellendus? Iusto quis soluta voluptates, vero consectetur, quaerat facilis debitis dicta harum perspiciatis rerum quo exercitationem, commodi enim? Ullam laborum alias quam assumenda enim? Eius assumenda repellat similique reiciendis, in dicta dolore iste corporis explicabo, nihil eum id cumque sequi eligendi ratione."
    },
    {
      id: 3,
      name: "DR.Dindyal Mahto",
      image: "/images/team/Dindyalpic.jpg",
      bio: "Alex manages events and volunteers for major outreach programs.",
    },

    
    
  ]);

  return (
    <section id="team" className="bg-silver-light">
      <div className="container">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h2 className="text-uppercase line-bottom-center mt-0">
                Our{" "}
                <span className="text-theme-colored font-weight-600">
                  volunteers
                </span>
              </h2>
              <div className="title-icon">
                <i className="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>
                Meet our amazing volunteers who are changing lives every day.
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
                  style={{position:'relative',borderRadius:'20px',marginTop:'-30px',textAlign:'center',padding:'2px 0px'}}
                  >
                    <h3 className="mt-5 text-white" 
                    
                    >{vol.name}</h3>
                    {/* <ul className="styled-icons icon-circled icon-theme-colored">
                      <li>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul> */}
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
