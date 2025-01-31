import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function useApi(url, queryKey) {
  function getData() {
    return axios.get(url);
  }

  const res = useQuery({
    queryKey: [queryKey],
    queryFn: getData,
  });
  return res;
}

export default useApi;
