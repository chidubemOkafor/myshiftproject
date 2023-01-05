import { useEffect, useState } from "react";
import axios from "axios";

const FetchStrapiData = (url, apiToken) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url, {
          headers: { Authorization: "chidubem" + apiToken },
        });
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default FetchStrapiData;
