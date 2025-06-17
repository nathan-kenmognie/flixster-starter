

## Unit Assignment: Flixster

Submitted by: **Nathan Kenmognie**

Estimated time spent: **30** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://nathan-flixster.onrender.com)

### Application Features

#### REQUIRED FEATURES

- [X] **Display Movies**
  - [X] Users can view a list of current movies from The Movie Database API in a grid view.
    - [X] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [X] For each movie displayed, users can see the movie's:
    - [X] Title
    - [X] Poster image
    - [X] Vote average
  - [X] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [X] **Search Functionality**
  - [X] Users can use a search bar to search for movies by title.
  - [X] The search bar should include:
    - [X] Text input field
    - [X] Submit/Search button
    - [X] Clear button
  - [X] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [X] Presses the Enter key
    - [X] Clicks the Submit/Search button
  - [X] Users can click the Clear button. When clicked:
    - [X] All text in the text input field is deleted
    - [X] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [X] **Design Features**
  - [X] Website implements all of the following accessibility features:
    - [X] Semantic HTML
    - [X] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [X] Alt text for images 
  - [X] Website implements responsive web design.
    - [X] Uses CSS Flexbox or CSS Grid
    - [X] Movie tiles and images shrink/grow in response to window size
  - [X] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [X] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [X] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [X] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [X] The pop-up displays additional details about the moving including:
      - [X] Runtime in minutes
      - [X] Backdrop poster
      - [X] Release date
      - [X] Genres
      - [X] An overview
  - [X] Users can use a drop-down menu to sort movies.
    - [X] Drop-down allows movies to be sorted by:
      - [X] Title (alphabetic, A-Z)
      - [X] Release date (chronologically, most recent to oldest)
      - [X] Vote average (descending, highest to lowest)
    - [X] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [X] Website displays:
    - [X] Header section
    - [X] Banner section
    - [X] Search bar
    - [X] Movie grid
    - [X] Footer section


#### STRETCH FEATURES

- [X] **Deployment**
  - [X] Website is deployed via Render.
  - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [X] **Embedded Movie Trailers**
  - [X] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [X] When the trailer is clicked, users can play the movie trailer.
- [X] **Favorite Button**
  - [X] For each movie displayed, users can favorite the movie.
  - [X] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [X] If the movie is not favorited:
    - [X] Clicking on the visual element should mark the movie as favorited
    - [X] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [X] If the movie is already favorited:
    - [X] Clicking on the visual element should mark the movie as *not* favorited.
    - [X] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [X] **Watched Checkbox**
  - [X] For each movie displayed, users can mark the movie as watched.
  - [X] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [X] If the movie has not been watched:
    - [X] Clicking on the visual element should mark the movie as watched
    - [X] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [X] If the movie is already watched:
    - [X] Clicking on the visual element should mark the movie as *not* watched.
    - [X] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [X] **Sidebar**
  - [X] The website includes a side navigation bar.
  - [X] The sidebar has three pages:
    - [X] Home
    - [X] Favorites
    - [X] Watched
  - [X] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [X] The Favorites page displays all favorited movies in a grid view.
  - [X] The Watched page displays all watched movies in a grid view.

### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/aa9754e8c51b445986e01abdf4eaffeb">
      <p>Loom Message - 17 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/aa9754e8c51b445986e01abdf4eaffeb">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/aa9754e8c51b445986e01abdf4eaffeb-d94018566cc61860-full-play.gif">
    </a>
  </div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, most lab topics were helpful. Especially useState, useEffect, and API fetching. However, managing toggled states like favorites and watched lists, and integrating extra movie data like runtime or trailers from TMDb, felt underexplained. I had to explore additional resources to fully implement those features.


* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
With more time, I would have added persistent storage for favorites, improved the user interface, and integrated genre based filtering. I also wanted to improve responsiveness and loading feedback. Better event handling, especially for toggling states, would have enhanced the overall experience and reduced inconsistencies in interaction timing.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

The modal worked well, and users could easily mark favorites. However, state updates sometimes delayed or didn’t reflect properly. A classmate used a sidebar with dynamic filters that looked clean and organized. I’d love to try that approach in my next project to improve both layout and functionality.


### Open-source libraries used

- [W3Schools](https://www.w3schools.com/howto/howto_js_sidenav.asp)

### Shout out

Shout out to Keith and Lucia for helping me get the sorting and serach features working as they should.