filename="./config.json";
const fs = require('fs');
let rawdata = fs.readFileSync(filename);
let config = JSON.parse(rawdata);
const clientId = config.clientId
const DiscordApi = require('discord-rpc');
const { time } = require('console');
const Api = new DiscordApi.Client({ transport: 'ipc'})
DiscordApi.register(clientId);
function Console(){
    console.log("FireAlpaca Rich Presence - by Prits#2138 \n-----------------------------------------------------")
    console.log("Connecting to Discord")
    setTimeout(function(){console.log("[/....]")}, 1200);
    setTimeout(function(){console.log("[#/...]")}, 1200);
    setTimeout(function(){console.log("[##/..]")}, 1200);
    setTimeout(function(){console.log("[###/.]")}, 1200);
    setTimeout(function(){console.log("[####/]")}, 1200);
    setTimeout(function(){console.log("[#####]");
    console.clear()
    console.log("FireAlpaca Rich Presence - by Prits#2138 \n-----------------------------------------------------")
    console.log("Successfully Connected to Discord Gateway! :D \nPress Ctrl+C to abort")}, 5000);
    
}

async function setActivity() {
    if (!Api) return;
    Api.setActivity({
        details: config.drawingname,
        state: config.additionalinfo,
        startTimestamp: Date.now(),
        largeImageKey: 'icon',
        largeImageText: config.largeimagetext,
        smallImageKey: 'pfp',
        smallImageText: "Made by Prits#2138",
        instance: false,
    });
};
Api.on('ready', async () => {
    setActivity()})
Api.login(({ clientId })).catch(err => console.error(err)).then(Console())