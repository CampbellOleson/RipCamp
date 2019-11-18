# [RipCamp](https://ripcamp.herokuapp.com/)

RipCamp is the go-to website for finding all of the best surf. Users can navigate the globe using RipCamp's map-based interface to find the locations of surf spots anywhere. RipCamp also has information on individual surf spots, including a description, difficulty level, and local weather conditions. 

RipCamp is built with **ExpressJS, MongoDB, and React/Redux on the frontend.** It also encorperates **Google Maps API** for the map interface, and **Open Weather API** for weather conditions. 

![Splash Page](./screenshots/splash.png)

## Features

   **Map/Index**
   
- RipCamp's primary interface is a map that users can navigate in search of surf spots. Surf spots on the map have markers indicating their locations. 
- The index on the left-hand side of the screen displays the surf spots that are within the bounds of the map. If you navigate away from the surf spots on the map, they will disappear from the index.
- Underlying this is a bounds-based query system that uses the latitude/longitude of the corners of the map to query the database for surf spots within range, which are then displayed on the map and in the index. 
- The map also features dynamic UX/UI. When you mouseover a map marker for a surf spot, the index will scroll to display that surf spot and highlight it. Similarly, if you mouseover a surf spot in the index, the info bubble on its respective map marker will open. 

![Index](./screenshots/index.png)

   **Weather**

- RipCamp uses the latitude/longitude of a given surf spot to fetch the local weather conditions from Open Weather API. Weather conditions are displayed on the surf-spot show page.

![Weather](./screenshots/weather.png)

What are you waiting for? Sign Up!

![Login](./screenshots/login.png)
