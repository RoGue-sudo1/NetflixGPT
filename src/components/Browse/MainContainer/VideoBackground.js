import { useState } from "react";
import { useSelector } from "react-redux";
import { IoVolumeMedium, IoVolumeMuteOutline } from "react-icons/io5";
import useMoviesTrailer from "../../../hooks/useMoviesTrailer";

function VideoBackground({ movieId }) {
  const [mute, setMute] = useState(true);
  
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMoviesTrailer(movieId);

  const handleVolumeButton = (e) => {
    e.preventDefault()
    setMute(prevState=>!prevState);
    
  };

  return (
    <div>
      <div className="flex" onClick={handleVolumeButton}>
        {mute ? (
          <IoVolumeMuteOutline className="bg-white bg-opacity-30 p-2 absolute z-40 text-5xl rounded-full right-0 top-3/4  " />
        ) : (
          <IoVolumeMedium className="bg-white bg-opacity-30 p-2 absolute z-40 text-5xl rounded-full right-0 top-3/4  " />
        )}
      </div>
      <iframe
        className="w-screen aspect-video scrollbar-hide  "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&vq=hd720&autoplay=1&controls=0&&showinfo=0&loop=1&mute="+(mute?"1":"0")
        }
        title="YouTube video player"
        height="100%"
        width="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;loop"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
