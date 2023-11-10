import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return

  const random = Math.floor(Math.random() * (movies.length-1));

  const mainMovie = movies[random];
  const { original_title, overview, id} = mainMovie;

  return <div>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
  </div>;
}

export default MainContainer;
