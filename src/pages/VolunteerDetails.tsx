import { useParams } from "react-router-dom";
import { useState } from "react";

interface Volunteer {
  id: number;
  name: string;
  image: string;
  bio: string;
}

const VolunteerDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [volunteers] = useState<Volunteer[]>([
    {
      id: 1,
      name: "Sujit Kumar",
      image: "/images/about/sujit.jpg",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a assumenda doloribus, ipsum perferendis ad sunt mollitia debitis, ratione aspernatur aliquid. Perspiciatis aliquid quibusdam accusantium. Voluptate beatae qui, porro expedita dolores suscipit numquam repudiandae deserunt minus reiciendis ipsum? Dolores nostrum facilis laudantium cupiditate esse ipsam, ipsum ut architecto, reiciendis mollitia sapiente delectus debitis vero nemo laboriosam unde temporibus repellendus? Iusto quis soluta voluptates, vero consectetur, quaerat facilis debitis dicta harum perspiciatis rerum quo exercitationem, commodi enim? Ullam laborum alias quam assumenda enim? Eius assumenda repellat similique reiciendis, in dicta dolore iste corporis explicabo, nihil eum id cumque sequi eligendi ratione."
    },
    {
      id: 2,
      name: "Jerin Jacson",
      image: "/images/team/team3.jpg",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a assumenda doloribus, ipsum perferendis ad sunt mollitia debitis, ratione aspernatur aliquid. Perspiciatis aliquid quibusdam accusantium. Voluptate beatae qui, porro expedita dolores suscipit numquam repudiandae deserunt minus reiciendis ipsum? Dolores nostrum facilis laudantium cupiditate esse ipsam, ipsum ut architecto, reiciendis mollitia sapiente delectus debitis vero nemo laboriosam unde temporibus repellendus? Iusto quis soluta voluptates, vero consectetur, quaerat facilis debitis dicta harum perspiciatis rerum quo exercitationem, commodi enim? Ullam laborum alias quam assumenda enim? Eius assumenda repellat similique reiciendis, in dicta dolore iste corporis explicabo, nihil eum id cumque sequi eligendi ratione."
    },
    {
      id: 3,
      name: "Alex Jacobson",
      image: "/images/team/team2.jpg",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi a assumenda doloribus, ipsum perferendis ad sunt mollitia debitis, ratione aspernatur aliquid. Perspiciatis aliquid quibusdam accusantium. Voluptate beatae qui, porro expedita dolores suscipit numquam repudiandae deserunt minus reiciendis ipsum? Dolores nostrum facilis laudantium cupiditate esse ipsam, ipsum ut architecto, reiciendis mollitia sapiente delectus debitis vero nemo laboriosam unde temporibus repellendus? Iusto quis soluta voluptates, vero consectetur, quaerat facilis debitis dicta harum perspiciatis rerum quo exercitationem, commodi enim? Ullam laborum alias quam assumenda enim? Eius assumenda repellat similique reiciendis, in dicta dolore iste corporis explicabo, nihil eum id cumque sequi eligendi ratione."
    },
  ]);

  const volunteer = volunteers.find((v) => v.id === Number(id));

  if (!volunteer) return <p>Volunteer not found</p>;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5">
          <img src={volunteer.image} alt={volunteer.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h2>{volunteer.name}</h2>
          <p>{volunteer.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
