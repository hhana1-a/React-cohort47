import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url); 
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]); 
  return { isLoading, data };
}