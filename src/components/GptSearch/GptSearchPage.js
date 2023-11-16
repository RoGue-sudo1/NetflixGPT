import { loginBgImg } from '../../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

function GptSearch() {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={loginBgImg} alt="background_image" className='h-screen object-cover  max-[600px]:h-full'/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
