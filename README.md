**NetflixGPT🚀🚀**


Header (logo on the right)
Body 
 - (login && sign up page )(authentication){
    -  For authetication we are using firebase
    -  We are pushing the user to the redux store
    -  Now we are not dispatching action everytime we sign in or sign out(in other way we are not hard   coding it whenever we are signin and sign out ) rather than that we are managing users by a   firebase api.
    -  This api tell us when the user signin and user sign out and we have to use this api once so we are using useEffect so whenver the user clicks on the sign iin or signout button the page re renders and useEffect will be called
    -  We are using the api code from firebase at body level.
    - **Now we can use useNavigate to navigate to browse page or window.location.href() or window.open()**
    - navigating the signin and signup page to browse after validation

    - **Remember to put auth on browse navigation i.e.**
          - **If a user is not logged In and the tries to access browse page it should redirect them again to login page.**
          - **If a user is logged In and they tries to access login page it should redirect again to browse page**
          - **So to solve this we will put our onAuthChange api in header as header is always present so we will navigate only from here so this wii fix my above mentioned issue.**

    - Now we should unsubscribe to onAuthChanged  because whenever the header reloads this event listener will be stacked so its cleanup is a good practise.Basically when my component unMount we should also unsubscribe to this.

    - So we will unsubscribe by this onAuthChanged returns a unsbsribe function so we have to only call it .



 }
 -  Browse page ( if authenticated user)
       - Header with logo at right and at left home, browse,signout, user logo
       - a movie trailer playing with name written on it + play and more info button 
       - movie showcase in a horizontal way with their categories (like )

       - Moving forward to movies section we are using TMDB api for movies because it provides movies with proper documentation and as netflix api is private and TMDB has godd autheticationa nd doesnt change frequemtly.
       
       - Register a TMDD and create an app and create api token and api key.
       - take the code of api fetching from there.


- **Browse Page**
   {
      - Main Container
          - Video Container
              - Play Button - More Info Button
      - Secondary Container
          - moviesList * n (from useNowPlatyingMovies())
          - categories of movies * n ("")
   },
   {
      **VideoContainer**
        - Video Title 
           - This will contain video title,description and play and more info button movie list is fetched from tmdb api.

        - Video Background
          - This will conatin video in background which tmdb api of videos in which we can find the movie from key and then it will take us youtube video from there you can choose embeded code and integerate it with your code.
          
          - We will fetch trailer video and dispatch it to store

   },
   {
      **Secondary Container**
      {- Movies List - Popular
         - Movies card * n
      - Movies List - Comedy
         -Movies card * n} * n
      
   }

**React.StrictMode**

**Sometimes there are two api calls and something else is called twice sometime this is because of React.StrictMode by wrapping this over our app , by this react re renders some elements like api, actions twice or we can say that react re renders some elements two time to catch if any inconsitentency in our render cycle. This only happens in developer mode when we build it for production level React.StrictMode is not present.**