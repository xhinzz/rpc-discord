# rpc-discord

![Image 0](https://imgur.com/Vk63OKt.png) ![Image 00](https://imgur.com/9PAqYtb.png)

**Easy RPC Discord with buttons**

Go to main.js file and past our client ID, buttons, images, etc..

```js
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
state: "state_text", // show state of app
details : "detail_text", // show details of app
timestamps: {
start: Date.now() // start timestamp || show time use 
},
assets : {
large_image : "large_image", //main image
large_text : "text_image",
small_image: "small_image",
small_text: "text_image" 
```

- You need create one application in discord dev

```
https://discord.com/developers/applications/
```

 - And upload images in assets
 
 ![Image 1](https://imgur.com/atoYobJ.png)

- Copy our clientID and replace in main.js file

![Image 2](https://imgur.com/SHaZPni.png)

- After setting up main.js, use these commands in the terminal

``
npm i
`` to install dependencies 

``
npm start 
`` to start script
