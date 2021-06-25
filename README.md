[![Netlify Status](https://api.netlify.com/api/v1/badges/fdf0672c-0019-4e1d-88e9-2263aa8274c8/deploy-status)](https://app.netlify.com/sites/mordos/deploys)

# Demo 
[MordOS - One OS to rule them all](https://mordos.netlify.app/)

# Screenshots 
###### Desktop:  
[![Desktop-Authentication1.png](https://i.postimg.cc/bwxpwTSC/Desktop-Authentication1.png)](https://postimg.cc/k2gkjWcK)
[![TextFile.png](https://i.postimg.cc/xdgQK1RL/TextFile.png)](https://postimg.cc/PLL0Hh0q)
[![File-Directory-Desktop.png](https://i.postimg.cc/bvq8DtQz/File-Directory-Desktop.png)](https://postimg.cc/w14nn3fP)
[![Gallery.png](https://i.postimg.cc/RVnvj9Sz/Gallery.png)](https://postimg.cc/YhMcW5LX)
[![Browser.png](https://i.postimg.cc/Wzdspc0g/Browser.png)](https://postimg.cc/n9fyT5Rh)
###### Mobile
[![Mobile.png](https://i.postimg.cc/8cxNjXb3/Mobile.png)](https://postimg.cc/PvbB749z)

# How to run
`git clone` the project locally  
`yarn install` to install all the dependencies  
`yarn start` to run the project in your browser


# Project overview
#### Functional requirements:
The client requested for a graphical user interface for a web based operating system. Considering that this is an MVP, functionality is supposed to be far from an OS but it does need to **look and feel like an OS**, to be **appealing and fun to explore**. Borgoth, **being the imaginary flaming venture demon**, should be this operating system's brand.  
Client also requested functionalities that they thought might bring a lot of value, such as:
- Mord OS should support creating and managing plain text files and include a directory mechanic in
  order to sort the files as one wishes.
- There should be a simple authentication feature so not everyone can access the OS. A simple email
  and password flow will do for now. ( *email: borgoth@mordos.com / pass: 12bindthem*)

Other functionalities that are not as crucial but could really help enrich the OS:
- To keep up with all the news and banter going on, the OS could include a dedicated **RSS reader app**. (data source: https://jsonplaceholder.typicode.com/comments)
- Having a **Camera app** seems like a must for any OS today.
- It would be good if the OS had a **Gallery app** to view images from different sources without having to switch. (data source: https://jsonplaceholder.typicode.com/photos , but can include others)
- The OS could also have a **dedicated web browser**. Can be simple at first.

#### Visual requirements 
Creative freedom given as long as the following visual requirements are respected: 
- The OS should look familiar to other systems so it doesn’t create confusion. 
- No visual UI libraries should be used.
- Keep it sane 	:exploding_head:

#### Deadline: 7 days
## Implementation & Thought process 
#### Visuals

##### Assets & color palette
Due to the client's requirement that Borgoth, an imaginary flaming venture demon, be the operating system's brand, I had to first find the appropriate assets to use ( drawings, photos ) e.g.  [logo](https://github.com/rangoc/MordOS/blob/main/src/assets/logo.svg), and it was critical that this asset be creative, fiery, and serious, as that was the style I was aiming for as an end-goal.
I had already decided that the entire OS would have a Ubuntu-ish look, and this image worked perfectly (it's worth noting that Photoshop had to be used in order to make a vector-based logo that would scale well quality-wise on different screen sizes, because the original source was a png with a solid background, so I had to remove the background and convert whole shape to svg).  
I chose the colors orange/yellow/red and purple since they are the most representative of Borgoth ( a venturing flaming demon ) and Ubuntu.

##### UI 
###### Background
Once I had logo and palette in place, I decided on a [stellar system](https://github.com/rangoc/MordOS/blob/main/src/assets/ui-background.svg) as a background, which perfectly complemented the already familiar look of Ubuntu ( due to the purple color ) and Borgoth's, who is described as a venturing demon, and what better place to venture out than a universe and it's stellar system :hole:?
###### App bar
The App bar was designed to look like the already-familiar Ubuntu style, with apps arranged vertically along the left edge of the screen. In order to make the entire user experience more user friendly, a hover effect with a tooltip should also be provided. 
###### App window
The App window should have a header with the app's icon and a 'X' (close window) icon. Because I, like Borgoth, am a great fan of dark themes,I decided that the section where the App's specific content will be rendered will have a dark background. :grin:  
  
That's pretty much it; everything else is basically little designer touches that are somewhat subjective to taste, such as fonts, input field styles and buttons, all of which can be found in sass files and code without me having to go into detail about them.
#### Functions
I'll try to keep this one short by simply giving a brief summary of the functionalities and how I implemented them; of course, the code is available for a more in-depth look. :grin:

##### Project anatomy: 
```
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── app.scss
│   ├── assets
│   │   ├── cancel.svg
│   │   ├── fileDirectory.svg
│   │   ├── file.svg
│   │   ├── gallery.svg
│   │   ├── logo.svg
│   │   ├── rssFeed.svg
│   │   ├── textFile.svg
│   │   ├── ui-background.svg
│   │   ├── webBrowser.svg
│   │   └── webcam.svg
│   ├── components
│   │   ├── appbar
│   │   │   ├── AppBar
│   │   │   │   ├── AppBar.js
│   │   │   │   └── appbar.scss
│   │   │   └── Icon
│   │   │       ├── Icon.js
│   │   │       └── icon.scss
│   │   ├── auth
│   │   │   ├── Authentication.js
│   │   │   └── authentication.scss
│   │   ├── fileDirectory
│   │   │   ├── Arrow
│   │   │   │   └── Arrow.js
│   │   │   ├── File
│   │   │   │   ├── File.js
│   │   │   │   └── file.scss
│   │   │   └── FileDirectory
│   │   │       ├── FileDirectory.js
│   │   │       └── fileDirectory.scss
│   │   ├── gallery
│   │   │   ├── Gallery
│   │   │   │   ├── Gallery.js
│   │   │   │   └── gallery.scss
│   │   │   └── Photo
│   │   │       ├── Photo.js
│   │   │       └── photo.scss
│   │   ├── rssFeed
│   │   │   ├── Comment
│   │   │   │   ├── Comment.js
│   │   │   │   └── comment.scss
│   │   │   └── RssFeed
│   │   │       ├── RssFeed.js
│   │   │       └── rssFeed.scss
│   │   ├── textFile
│   │   │   ├── CreateModal
│   │   │   │   ├── CreateModal.js
│   │   │   │   └── createModal.scss
│   │   │   ├── CreateTextFile
│   │   │   │   ├── CreateTextFile.js
│   │   │   │   └── createTextFile.scss
│   │   │   ├── EditTextFile
│   │   │   │   └── EditTextFile.js
│   │   │   └── HintOverlay
│   │   │       ├── HintOverlay.js
│   │   │       └── hintOverlay.scss
│   │   ├── ui
│   │   │   ├── Logo
│   │   │   │   ├── Logo.js
│   │   │   │   └── logo.scss
│   │   │   └── UserInterface
│   │   │       ├── UserInterface.js
│   │   │       └── userInterface.scss
│   │   ├── webBrowser
│   │   │   ├── WebBrowser.js
│   │   │   └── webBrowser.scss
│   │   ├── webcam
│   │   │   ├── Webcam.js
│   │   │   └── webcam.scss
│   │   ├── Window.js
│   │   └── window.scss
│   ├── constants
│   │   ├── appType.js
│   │   ├── sortType.js
│   │   └── validCredentials.js
│   ├── context
│   │   ├── AuthProvider.js
│   │   ├── TextFileProvider.js
│   │   └── WindowProvider.js
│   ├── hooks
│   │   └── useFetch.js
│   ├── includeMedia.scss
│   ├── index.js
│   ├── index.scss
│   └── utils
│       └── sortFiles.js
└── yarn.lock
```
##### Context
 - [AuthProvider](https://github.com/rangoc/MordOS/blob/main/src/context/AuthProvider.js) - Authentication context which wraps whole application and exposes auth state and functions.  
   
 - [WindowProvider](https://github.com/rangoc/MordOS/blob/main/src/context/WindowProvider.js) - Window context which wraps whole **UserInterface** component and exposes window state
and functions.  
   
 - [TextFileProvider](https://github.com/rangoc/MordOS/blob/main/src/context/TextFileProvider.js) - Text File context which wraps whole **UserInterface** component and exposes state and functions related to text files and it's management.
##### Components
 - [App](https://github.com/rangoc/MordOS/blob/main/src/App.js) -  renders [Authentication](https://github.com/rangoc/MordOS/blob/main/src/components/auth/Authentication.js) /      [UserInterface](https://github.com/rangoc/MordOS/blob/main/src/components/ui/UserInterface/UserInterface.js) based on the [isAuthenticated](https://github.com/rangoc/MordOS/blob/main/src/context/AuthProvider.js#L14).  
  
 - [Authentication](https://github.com/rangoc/MordOS/blob/main/src/components/auth/Authentication.js) - responsible for holding the auth form and simple auth validation.  
  
 - [UserInterface](https://github.com/rangoc/MordOS/blob/main/src/components/ui/UserInterface/UserInterface.js) - responsible for rendering individual Apps in `windowArea` ( space on screen dedicated solely to the Apps window and it's content) based on the active status coming from [WindowProvider](https://github.com/rangoc/MordOS/blob/main/src/context/WindowProvider.js).  
  
 - [AppBar](https://github.com/rangoc/MordOS/blob/main/src/components/appbar/AppBar/AppBar.js) - responsible for triggering each Application's active status.  
  
 - [TextFile](https://github.com/rangoc/MordOS/tree/main/src/components/textFile) - responsible for text files **Create / Update** part of CRUD set of functionalities. 
  
 - [FileDirectory](https://github.com/rangoc/MordOS/blob/main/src/components/fileDirectory/FileDirectory/FileDirectory.js) - responsible for text files **Read / Delete** part of CRUD set of functionalities.  
  
 - [Gallery](https://github.com/rangoc/MordOS/blob/main/src/components/gallery/Gallery/Gallery.js) - utilizes [useFetch](https://github.com/rangoc/MordOS/blob/main/src/hooks/useFetch.js) custom hook for data fetching. 
  
 - [RssFeed](https://github.com/rangoc/MordOS/blob/main/src/components/rssFeed/RssFeed/RssFeed.js) - utilizes [useFetch](https://github.com/rangoc/MordOS/blob/main/src/hooks/useFetch.js) custom hook for data fetching.  
  
 - [WebCam](https://github.com/rangoc/MordOS/blob/main/src/components/webcam/Webcam.js) - provides integration with your own webcam feed coming from your personal computer/phone.  
  
 - [WebBrowser](https://github.com/rangoc/MordOS/blob/main/src/components/webBrowser/WebBrowser.js) - simulates a real web browser by allowing a user to see the content of requested url embedded inside of an iframe.  
  
 - [Window](https://github.com/rangoc/MordOS/blob/main/src/components/Window.js) - reusable, serves as a wrapper around each app and provides it with themed styling while allowing customization.  

##### Custom hooks
 - [useFetch](https://github.com/rangoc/MordOS/blob/main/src/hooks/useFetch.js) - receives an url as an argument, generic custom hook that can be used to retrieve data.  
  
#### Additional improvements / features suggestions:
 - **Drag & Move** - window feature that allows user to drag and move App's window across the screen. It could be built by trying to register the mouse events such as `onMouseDown`,`onMouseUp` & `onMouseMove` of the ref element while keeping track of the current's mouse position coordinates on the screen. Certain limitations on the boundaries of the area that's allowed to be used, should also be set.  
   
  - **"Priority" of windows** - a feature that allows for windows to take priority based on the `selected` status. This feature could be implemented by dynamically assigning `z-index` to a currently `selected` window.
    
  - **File upload** - a feature that let's user upload his own text file inside of `FileDirectory` component, could be accomplished by combining input field for file upload and Fetch Api / Axios library.  
  
  - **Camera upload** - a feature that let's a user take & save a picture taken with his webcam to `Gallery` component.

 - **More than one instance of same app running** - currently, the OS is designed in a way which allows for a user to only activate one instance of the same App type. One of the potential improvements would be to allow for a user to edit more than one text file concurrently. But hey, this isn't a bug, it's a feature :upside_down_face:  

... and many more, but these would be some of the first ones that could be done in the next iteration of upgrades, when it comes to this specific **MVP**.

  
#### Things that I would do differently: 
  - **Saving user's credentials & session inside of localStorage** - :zipper_mouth_face: This is a massive no-no. But this was done solely for the sake of convenience, to avoid accidental refreshes when exploring MordOS, and because Borgoth would be furious if he had to authenticate a user who had been authenticated just seconds before :grin:. So this was only done to calm Borgoth's rage; otherwise, if we were talking about a production scenario with a real backend, this would surely be done through JWT.
    
  - **Using my own media queries** - If we're talking about optimizations, this would be one of the areas where we could make improvements. The one file `includeMedia.scss` is responsible for a large amount of the project's sass percentage, but on the other hand makes media queries much easier and intuitive. However, for such tiny projects as this one, it may be an overkill, especially if optimization is an issue. So, if it became necessary, I would definitely utilize my own media queries.

  - **Using an iframe as a solution for a dedicated web browser** -  iframes aren't really generous and they have their drawbacks, such as :
    - Trying to embedded some sites, e.g. google, will result with `google.com refused to connnect` due to the  google's own configuration which refuses to display it in a frame because it set `X-Frame-Options` to `sameorigin`. 

#### Most painful point of the project:

The architecture was undoubtedly one of the aspects of the project that I had the most trouble with, and that required the most modifications and thought. At first, I was obsessed with creating the ideal, most reusable, most generic architecture in order to adhere to the DRY principle, but halfway through the project, I began to doubt my model owing to the unique requirements of each subsequent task. As a result of that unique requirement, the model had to be revised and slightly redesigned specifically to meet that requirement, casting doubt on the DRY principle and my architecture. And who knows, if this MVP continues to evolve, perhaps even more extensive remodeling will be required, thus coming up with the correct architecture design remains one of the most difficult challenges for me to solve. :grin: 

## Final Words
This project was a blast to work on. The client's creative flexibility was liberating, and it allowed me to demonstrate my ability to 'wear a different hat' depending on different tasks, ranging from graphics/ux design to web development, which is my passion. Borgoth was an ultra fun character to create story around, and even though the idea of implementing the functionalities of an operating system inside of a browser sounds really wild, I learned a lot with this project. Will definitely work with this client again, if the opportunity arises.   
 

Thanks for a read! Cheers :beer: <br/>
![Looney Tunes](https://media.giphy.com/media/5IT69msgpaOcg/giphy.gif)
