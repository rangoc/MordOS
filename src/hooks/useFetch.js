const { useState, useEffect } = require('react');

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [serverError, setServerError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const fetchResponse = await fetch(url);
        const response = await fetchResponse.json();
        setData(response);
        setIsLoading(false);
      } catch (err) {
        setServerError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { isLoading, data, serverError };
};

export default useFetch;
