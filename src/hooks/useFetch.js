import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("404 Not Found");
          }
          throw new Error("Failed to fetch data");
        }
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isMounted) {
        setError(new Error("Timeout while fetching data"));
        setLoading(false);
      }
    }, 10000); // 10 seconds timeout

    fetchData();

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
