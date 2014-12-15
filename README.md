TEDs or Tales | A random TED Talk-finder (Only works in Google Chrome browsers)

https://teds-or-tales.herokuapp.com/

Built with:

- JQuery
- Grunt
- TED API
- Heroku for deployment

Learning goals: 

- Work with an API
- Gain a better understanding of JavaScript and principles such as promises.
- Begin understanding the capabilities of build tools.
- Learn more about JQuery UI features. 

App overview: 

A user can: 

- Spin a wheel (adapted from this code: http://jsfiddle.net/DnTX6) that displays 5 TED Talk quotes. Quotes are pulled from the TED Talks quotes API by a random number range.  

- View the random quote, speaker name and speaker photo (pulled from the Talk API while the wheel spins).

- Users can choose to listen to the talk, opening a JQuery modal containing the embedded video (utilizes this plug-in: https://github.com/kylefox/jquery-modal) or spin again. 

In the future, I'd like to:

- Make the site responsive through media queries.
- Refactor code to make it more modular. 
- Allow users to control spinning action and truly randomize the spins. (Inspired by this example: http://codepen.io/Aldlevine/pen/yGLqd). 
