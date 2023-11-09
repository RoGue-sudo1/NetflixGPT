
function VideoTitle({title,overview}) {
  return (
    <div className=" w-screen aspect-video absolute text-white pt-[13%] pl-12 bg-gradient-to-r from-black  ">
      <h1 className="font-bold text-6xl ">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
      <button className="bg-white p-4 px-12 text-black text-xl hover:bg-opacity-70 font-bold rounded-lg">Play</button>
      <button className="bg-gray-500 mx-2 p-4 px-12 text-white text-xl bg-opacity-50 hover:bg-opacity-30  font-bold rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
