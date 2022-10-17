  import axios from 'axios';
  import React, { useState } from 'react'
  import { useQuery } from 'react-query';
  import { useHeroesData } from './useHeroesData';

  const Pagination = () => {
    const [state, setState] = useState(1)
    const fetchData= async () => {
      let res = await axios.get(`http://localhost:4000/superheroes?_limit=2&_page=${state}`);
      return res
    }

    const {data} = useQuery(['pagination', state], fetchData, {
      keepPreviousData: true,
    })
    return (
      <div>
        <h1>Pagination</h1>
        <div>{data?.data.map(item => <h1>{item?.name} </h1>)}</div>
        <button onClick={() => setState(state - 1)} disabled={state===1}>prev</button>
        <span>{state}</span>
        <button onClick={() => setState(state + 1)} disabled={state===3}>next</button>
      </div>
    );
  }

  export default Pagination