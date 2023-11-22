import React, { useCallback,  useEffect,  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_SEARCH_API } from "../../utils/constants";
import lang from "../../utils/langConstants";
import { addMovieSearchResult } from "../../utils/store/slices/moviesSlice";

function SearchBar() {
  const langConfig = useSelector((store) => store.config.lang);
  const dispatch = useDispatch()
  const searchText = useRef(null)

 const searchMovie = async () =>{
    const data = await fetch(MOVIE_SEARCH_API+(searchText.current.value)+'&include_adult=ftrue&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addMovieSearchResult(json.results[0]))
}

  const handleGptSearchButtonClicked = useCallback(()=>{

    // const gptQuery = "Act as a Movie recommendation system and sugegst some movies for the query:"+searchText.current.value+".only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
     
    //  const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   })

    //   console.log(gptResults.choices)
    
    searchMovie()
   

    
  },[])

  return (
    <div className=" pt-[45%] md:pt-[10%] flex justify-center ">
      <form
        className=" md:w-1/2 bg-black rounded-xl flex flex-col w-[85%] md:grid md:grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg  "
          placeholder={lang[langConfig].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white font-bold rounded-lg "
          onClick={handleGptSearchButtonClicked}
        >
          {lang[langConfig].search}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
