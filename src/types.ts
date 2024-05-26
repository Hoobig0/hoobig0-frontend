export type myLocation = {
  x: number;
  y: number;
};

export type cctvResponse = {
  cctv_list: cctv[];
};

export type cctv = {
  cctvId: number;
  x: string;
  y: string;
};
