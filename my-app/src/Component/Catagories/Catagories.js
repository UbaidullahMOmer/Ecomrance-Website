import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Catagories() {
  const navigate = useNavigate();
  const [pData, setPData] = useState([]);

  const getMovieList = async () => {
    const url = "http://localhost:1337/api/catagories?populate=*";

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      const data = responseJson;
      setPData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  function handleClick(cata) {
    navigate("/catagory", { state: { id: cata } });
    console.log(cata);
  }

  return (
    <section className="section category">
      <div className="cat-center">
        {pData.map((data) => {
          if(data.id <4)
          return (
            <div className="cat" key={data.id}>
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="Cat1 imga"
              />
              <div>
                <button onClick={() => handleClick(data.attributes.title)}>
                  {data.attributes.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Catagories;
