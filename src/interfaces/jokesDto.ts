export interface JokeDto {
  id?: string;
  Title: string;
  Body: string;
  Author: string;
  Views?: number;
  CreatedAt?: number;
}

export interface JokesDto {
  data: JokeDto[];
}
