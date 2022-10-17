import React from "react";
import { Link } from "react-router-dom";
import { useHeroesData } from "./useHeroesData";
const RQSuperHeroesy = () => {
  const { status, data, error, isLoading, isFetching, refetch } = useHeroesData();

  return (
    <div>
      <h1>RQSuperHeroesy</h1>
      <div>
        {status === "loading" && <h1>loading...</h1>}
        {status === "error" && <h1>{error.message}</h1>}
        {status === "success" && <h1>success</h1>}
      </div>
      <div>
        {data?.data.map((item) => (
          <Link style={{textDecoration:"none", display:"block"}} key={item.id} to={`/superhero/${item?.id}`}>
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RQSuperHeroesy;
