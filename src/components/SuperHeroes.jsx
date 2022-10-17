import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>SuperHeroes</h1>
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      <div>
        {data?.map((item) => {
          return (
            <div key={item?.id}>
              <h2>
                {item?.id} - {item?.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuperHeroes;
