import React, { useEffect, useState } from "react"
import SingleEstat from "../SingleEstat/SingleEstate";

const Estat = (props) => {
    const [estat, setEstat] = useState([]);

    useEffect(() => {
      fetch('/data.json')
        .then(res => res.json())
        .then(data => setEstat(data));
    }, []);
  
    return (
      <div className='grid  container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
        estat.map(item => <SingleEstat item={item}></SingleEstat>
          )
      }
      </div>)
};

export default Estat;
