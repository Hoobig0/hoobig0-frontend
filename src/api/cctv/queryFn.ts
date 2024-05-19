import api from "~/api";
import { cctvResponse, myLocation } from "~/types";

export const queryCctv = async (myLocation: myLocation) => {
  const { x, y } = myLocation;
  const res = await api.get<cctvResponse>({ url: "/cctv", params: { x, y } });
  return res.data;
};
