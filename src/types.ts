export type myLocation = {
  x: number;
  y: number;
};

export type cctvResponse = {
  cctv_list: cctv[];
};

export type cctv = {
  cctv_id: number;
  cctv_x: number;
  cctv_y: number;
};
