# LIRI-bot

An app running through Node that allows the user to find relevant data based on search terms such as movies, songs, or artist names.
Type `node liri.js` in Terminal, then your command followed by the search term and hit Enter to get results.

### concert-this
![concert this](./images/concert-this.png)
Use `node liri.js concert-this` followed by an artist's name to get an upcoming show with location, venue name, and date.

![concert this default](./images/concert-this-default.png)
If you don't anything in the search area for artist name, then it will search the default artist, Tycho.

### spotify-this-song
![spotify this song](./images/spotify-this-song.png)
Use `node liri.js spotify-this-song` plus a song title to get info from Spotify about the track, including artist name, the album it appeared on, and a link to preview the song on Spotify.

![spotify this song default](./images/spotify-this-song-default.png)
Again, if no search parameters are given then it will default, this time to "I Think it is Beautiful that You are 256 Colors Too" by Black Moth Super Rainbow.

### movie-this
![movie this](./images/movie-this.png)
Use `node liri.js movie-this` and the movie title you want to search for to get the plot, release date, as well as actors and country of origin for the film. The default in this case is Spirited Away.

### do-what-it-says
![random text file spotify](./images/randomtxt-spotify.png)
![random text file movie](./images/randomtxt-movie.png)
Edit the text inside "random.txt" to give secret instructions to LIRI, then in Terminal enter `node liri.js do-what-it-says`, which will interpret the text file you edited and give you your results.
![do what it says spotify](./images/do-what-it-says-spotify.png)
![do what it says movie](./images/do-what-it-says-movie.png)

### History
Check out "log.txt" to see your all of your results in one text file.
![history log](./images/logtxt.png)
