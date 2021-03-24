import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useParams, useHistory } from "react-router-dom";

const Pokemon = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState("  ");
  const [move1, setmove] = useState();

  const inpevn = (event) => {
    setnum(event.target.value);
  };
  async function poko() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${num}`
    );
    setname(response.data.name);
    setmove(response.data.moves.length);
  }
  useEffect(() => {
    // alert(num);
    document.title = `${name} is here`;
    poko();
  });

  const { savan, plaza } = useParams();
  const location = useLocation();
  const history=useHistory();

  // console.log(history);


  return (
    <>
      <h1>
        your param is here {savan} {plaza}
      </h1>
      <p>cur location is {location.pathname}</p>

      {location.pathname === `/pokemon/ravu/kaka` ? (
        <button onClick={history.goBack}>Go Back</button>
      ) : null}


      <h1>You choose {num}</h1>
      <p>Name is {name}</p>
      <p> {move1} moves</p>

      <select value={num} onChange={inpevn}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Pokemon;
