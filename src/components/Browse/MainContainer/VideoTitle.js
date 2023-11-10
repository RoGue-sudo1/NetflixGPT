import { useState } from "react";


function VideoTitle({ title, overview }) {
  const [readMore, setReadMore] = useState(false);

  const limit = 248;

  const handleReadMoreButton = () => {
    setReadMore(true);
  };

  const handleReadLessButton = ()=>{
    setReadMore(false)
  }

  return (
    <div className=" w-screen aspect-video scrollbar-hide absolute text-white pt-[13%] pl-12 bg-gradient-to-r from-black  ">
      <h1 className="font-bold text-6xl ">{title}</h1>
      {overview.length > limit && !readMore ? (
        <p className="py-6 w-1/4 text-lg">
          {overview.slice(0, limit)}{" "}
          <button className="font-bold text-xl" onClick={handleReadMoreButton}>
            .....Read More
          </button>
        </p>
      ) : (
        <p className="py-6 w-1/4 text-lg">{overview}
          <button className="font-bold text-xl" onClick={handleReadLessButton}>
            .....Read Less
          </button>
        </p>
        
      )}
      <div>
        <button className="bg-white p-4 px-12  text-black text-xl hover:bg-opacity-70 font-bold rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-12 text-white text-xl bg-opacity-50 hover:bg-opacity-30  font-bold rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
