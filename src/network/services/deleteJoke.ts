import { JokeDto } from "../../interfaces/jokesDto";

import axiosInstance from "../axiosInstance";

export const deleteJoke = async (params: { id: string }) => {
  const res = await axiosInstance.delete(`/${params.id}`);

  return res.data;
};
