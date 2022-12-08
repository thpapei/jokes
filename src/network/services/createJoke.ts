import { JokeDto } from "../../interfaces/jokesDto";
import axiosInstance from "../axiosInstance";

const createJoke = async (joke: JokeDto) => {
  const res = await axiosInstance.post("/", joke);
  return res;
};

export default createJoke;
