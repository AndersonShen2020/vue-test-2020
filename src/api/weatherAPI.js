import axios from "axios";

// 使用 cors-anywhere
const cors = "https://cors-anywhere.herokuapp.com/";
const url = "https://opendata.cwb.gov.tw/api/v1/rest/";

const weatherRequest = axios.create({
  //   baseURL: `${cors}${url}`,
  baseURL: `${url}`,
});

export const getweatherRequest = () =>
  weatherRequest.get(
    "/datastore/F-C0032-001?Authorization=CWB-193CFB52-6B00-4059-8966-CCF94B309919"
  );

export const getweatherListRequest = () => weatherRequest.get("/dataset");
