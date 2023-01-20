import { useEffect, useState } from "react";
import axios from "axios";

const FetchStrapiData = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:1337/api/"+url, {
          headers: { Authorization: "Bearer " + "15262b76e81005a153caa1620e297eb64dd64895e23d6119c58b84dbde32ba484c4ca700db33caa90724c4e98041bb7d09a088f3f2d06aa711b1767876ef8429bcaaa6d2006cfc4e7d3efef631055699e138c7d5db74f8a50df1bcf47d69ef9b4fe4ef28e511ebcc43501ce1c95c08573a6ef0b30da34b643af07ff38de43b63" },
        });
        setData(response.data);
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
