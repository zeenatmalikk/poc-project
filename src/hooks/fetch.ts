// src/hooks/fetch.ts
import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

// Replace fetchAPI with an axios call
export const fetchAPI = async (url: string, options?: AxiosRequestConfig) => {
  console.log(url, 'url');
  
  try {
    const response = await axios(url, options);
    return response.data; // axios automatically parses the JSON data
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};

export const useFetch = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchAPI(url, options);
      setData(result); // No need to extract .data, axios already handles it
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
