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
 }
 -  Browse page ( if authenticated user)
       - Header with logo at right and at left home, browse,signout, user logo
       - a movie trailer playing with name written on it + play and more info button 
       - movie showcase in a horizontal way with their categories (like )