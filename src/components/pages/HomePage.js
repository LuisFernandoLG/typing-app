import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const initialExercises = [];

export const HomePage = () => {
  const [exercises, setExercises] = useState(initialExercises);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?maxLength=200&minLength=100&limit=10")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setExercises(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div>
      {exercises.map((item) => (
        <>
          <NavLink to={`${routes.EXERCICE_PAGE}/${item._id}`} key={item._id}>
            {item.author}
          </NavLink>
          <br></br>
        </>
      ))}
    </div>
  );
};
