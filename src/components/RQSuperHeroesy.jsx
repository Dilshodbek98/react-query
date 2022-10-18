import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useHeroesData } from "./useHeroesData";
const RQSuperHeroesy = () => {
  const [state, setState] = useState({});
  const { status, data, error, isLoading, isFetching, refetch } =
    useHeroesData();

  const getValue = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const sendData = async () => {
    return await axios.post("http://localhost:4000/superheroes", state);
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(sendData, {
    // onSuccess: (data) => {
      // queryClient.setQueryData("superheroes", (oldQueryData) => {
      //   return {
      //     ...oldQueryData,
      //     data: [...oldQueryData.data, data.data],
      //   };
      // });
    // },
    onMutate: async() => {
      await queryClient.cancelQueries("superheroes");
      const prevData = queryClient.setQueryData(
        "superheroes",
        (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [...oldQueryData.data, data.data],
          };
        }
      );
      return {
        prevData
      }
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData("superheroes", context.prevData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("superheroes")
    },
  });
  const onSubmit = () => {
    mutate();
  };
  return (
    <div>
      <h1>RQSuperHeroesy</h1>
      <input type="text" name="name" placeholder="name" onChange={getValue} />
      <input type="text" name="job" placeholder="job" onChange={getValue} />
      <button onClick={onSubmit}>submit</button>
      <div>
        {status === "loading" && <h1>loading...</h1>}
        {status === "error" && <h1>{error.message}</h1>}
        {status === "success" && <h1>success</h1>}
      </div>
      <div>
        {data?.data.map((item) => (
          <Link
            style={{
              textDecoration: "none",
              display: "inline-block",
              marginRight: "30px",
            }}
            key={item.id}
            to={`/superhero/${item?.id}`}
          >
            {item?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RQSuperHeroesy;
