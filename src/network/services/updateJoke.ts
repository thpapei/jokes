import { JokeDto } from "../../interfaces/jokesDto";
import axiosInstance from "../axiosInstance";

const updateJoke = async (joke: JokeDto) => {
  const { id, ...rest } = joke;
  const res = await axiosInstance.put(`/${joke.id}`, rest);
  return res;
};

export default updateJoke;
