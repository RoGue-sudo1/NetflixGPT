import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMoviesTrailer(movieId );

  return (
    <div >
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/X4d_v-HyR4o?si="+trailerVideo?.key+"&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
