import { loginBgImg } from '../../utils/constants'
import MovieSuggestions from './MovieSuggestions'
import SearchBar from './SearchBar'

function Search() {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={loginBgImg} alt="background_image" className='h-screen object-cover md:h-full '/>
      </div>
      <SearchBar/>
      <MovieSuggestions/>
    </div>
  )
}

export default Search
