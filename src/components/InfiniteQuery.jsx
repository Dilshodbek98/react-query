import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

const InfiniteQuery = ({pageParam}) => {
  const fetchData = async () => {
    let res = await axios.get(
      `http://localhost:4000/superheroes?_limit=2&_page=${pageParam}}`
    );
    return res;
  };

  const { hasNextPage, fetchNextPage, data } = useInfiniteQuery("heros", fetchData, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length > 3) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log(data);
  return (
    <div>
      <h1>InfiniteQuery</h1>
      <div>
        {data?.pages.map(group => {
          return(
            group?.data.map(item => {
              return <h1>{item.name}</h1>
            })
          )
        })}
      </div>
      <button onClick={fetchNextPage}>show more</button>
    </div>
  );
};

export default InfiniteQuery;
