import axios from "axios";
import { useQuery } from "react-query";

const fetchData = async () => {
  let res = await axios.get("http://localhost:4000/superheroes");
  return res;
};

export const useHeroesData = () => {
  return useQuery("superheroes", fetchData, {});
};
