import api from "~/api";
import { cctvResponse, myLocation, cctv } from "~/types";
const data = [
  {
    cctvId: 1,
    x: "37.2793594",
    y: "127.0434841",
  },
  {
    cctvId: 3,
    x: "37.2787829",
    y: "127.0440551",
  },
];
export const queryCctv = async (myLocation: myLocation) => {
  const { x, y } = myLocation;
  const res = await api.get<cctvResponse>({ url: "/cctv", params: { x, y } });

  return data as cctv[];
  // isLoading: false,
  // isError: false,
  // error: null,
};
