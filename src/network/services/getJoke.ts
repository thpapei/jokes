import { JokeDto } from "../../interfaces/jokesDto";

import axiosInstance from "../axiosInstance";

export const getJoke = async (id?: string) => {
  const res = await axiosInstance.get<JokeDto[]>("/", {
    params: {
      id,
    },
  });

  return res.data[0] || {};
};
