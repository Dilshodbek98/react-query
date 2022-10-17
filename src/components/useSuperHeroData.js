import axios from "axios";
import { useQuery } from "react-query"

const fetchData = async ({queryKey}) => {
  const id = queryKey[1]
  let res = await axios(`http://localhost:4000/superheroes/${id}`);
  return res
}
export const useSuperHeroData = (id) => {
  return useQuery(['superheros', id], fetchData)
} 