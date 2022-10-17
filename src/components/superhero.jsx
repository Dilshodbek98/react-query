  import React from 'react'
  import { useParams } from 'react-router-dom'
  import { useSuperHeroData } from './useSuperHeroData'

  const Superhero = () => {
    const params = useParams()
    const {data, status} = useSuperHeroData(params.id);
    return (
      <div>
        <h2>
          {data?.data?.id}-
          {data?.data?.name},
          {data?.data?.alterEgo}
        </h2>
      </div>
    );
  }

  export default Superhero