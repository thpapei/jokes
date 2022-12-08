import { JokeDto } from "../../interfaces/jokesDto";

import axiosInstance from "../axiosInstance";

export const getJokesPaginated = async (page: number, limit: number) => {
  const res = await axiosInstance.get<JokeDto[]>("/", {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  return res.data;
};
