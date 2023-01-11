import { useEffect, useState } from "react";
import axios from "axios";

const FetchStrapiData = (url, apiToken) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url, {
          headers: { Authorization: "Bearer " + apiToken },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, apiToken]);

  return { data, error, loading };
};

export default FetchStrapiData;
