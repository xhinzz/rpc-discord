console.log("\x1b[35m%s\x1b[0m",`

                               ██╗         ██╗   ██╗    ███████╗    ██╗  ██╗     █████╗    
                               ██║         ██║   ██║    ██╔════╝    ██║ ██╔╝    ██╔══██╗   
                               ██║         ██║   ██║    ███████╗    █████╔╝     ███████║    
                               ██║         ██║   ██║    ╚════██║    ██╔═██╗     ██╔══██║    
                               ███████╗    ╚██████╔╝    ███████║    ██║  ██╗    ██║  ██║    
                               ╚══════╝     ╚═════╝     ╚══════╝    ╚═╝  ╚═╝    ╚═╝  ╚═╝    
                                                             `)


console.log("\x1b[32m%s\x1b[0m", `[Log]`, "\x1b[31m", `[Loading] Loading Discord rich presence...`)

var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
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
},
buttons : [{label : "button1_text" , url : "link_button1_here"},{label : "button_2_text",url : "link_button2_here"}] //buttons
},

})
})
client.login({ clientId : "512746125909032961" }).catch(console.error); // your app id
setTimeout(function () {
console.log("\x1b[32m%s\x1b[0m", `[Log]`, "\x1b[31m", `[logado] Rich presence logado com sucesso.`)
}, 10500)

client.on('ready', async () => {
    console.log("\x1b[32m", "\x1b[37m",`Successfully authorised as ${client.user.username}#${client.user.discriminator}`);

});