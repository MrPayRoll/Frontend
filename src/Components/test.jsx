import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6072-94-141-124-60.ngrok-free.app/api/detail/all', {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
<div>
    {data && data.map((item) => (
      <div key={item.detail_id}>
        <p>Price: {item.price}</p>
        <img src={`data:image/png;base64,${item.img}`}/>
        <h2>{item.name}</h2>
      </div>
    ))}
  </div>
  );
};

export default YourComponent;
