import React,{useState,useEffect} from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";


const Web_Temprature = () => {
   
  const [temp1, settemp] = useState();
  const [search,setsearch]=useState("surat");

   useEffect( () => {
   
    const fechapi=async()=>{

        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93c1a6a2bca8a9f4a69e0aa162dc5725`;
        const responce= await fetch(url);
        const resjson= await responce.json();
        
        settemp(resjson.main);
    };
    fechapi();
  },[search])

  const inputevent = (event) => {
    const temp1 = event.target.value;
    console.log(temp1);
    settemp(temp1);
  };
  return (
    <>
      <div className="box">
        <div className="search_bar">
          <input
            className="search_inp"
            type="Search"
            placeholder="Search Location"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {!temp1 ? (
          <p className="location text-center">No Data Found</p>
        ) : (
          <div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <div className="weathercon">
              <i className="fas fa-sun"></i>
            </div>
            <div className="info">
              <h2 className="location"> {search}</h2>
              <h1 className="temp">{temp1.temp}°Cel </h1>
              <p className="date">
                Min:{temp1.temp_min}°Cel | Max:{temp1.temp_max}°Cel{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Web_Temprature;
