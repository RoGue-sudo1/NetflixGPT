import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { nowPlayingMovies } from "../utils/store/slices/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIES_API, API_OPTIONS);
    const json = await data.json();

    dispatch(nowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
