filename="./config.json";
const fs = require('fs');
let rawdata = fs.readFileSync(filename);
let config = JSON.parse(rawdata);
const clientId = config.clientId
const DiscordApi = require('discord-rpc');
const { time } = require('console');
const Api = new DiscordApi.Client({ transport: 'ipc'})
DiscordApi.register(clientId);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function checkConfig(){
    if(config.clientId === '' || config.drawingname === '' || config.additionalinfo === '' || config.largeimagetext === ''){return false}
    console.log('\x1b[36m%s\x1b[0m', "[!]", "\x1b[32mCurrent config settings:\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Application id: ", "\x1b[32m"+config.clientId+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Drawing name: ", "\x1b[32m"+config.drawingname+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Additional info: ", "\x1b[32m"+config.additionalinfo+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Text when hovering above large image icon: ","\x1b[32m"+config.largeimagetext+"\x1b[0m")
    console.log("Starting in 10 seconds..")
    console.log("\x1b[46mPress Ctrl+C to abort\x1b[0m")
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
    return true
}
function start(){
    console.log("\x1b[35mFireAlpaca Rich Presence - by Prits#2138\x1b[0m")
    console.log("-----------------------------------------------------")
    if(!checkConfig()){throw new Error("Config Settings were terminated!");}
    console.log("Connecting to Discord...")
    console.clear()
    console.log("\x1b[35mFireAlpaca Rich Presence - by Prits#2138\x1b[0m \n-----------------------------------------------------")
    console.log("\x1b[32mSuccessfully\x1b[0m Connected to Discord Gateway! :D \n\x1b[46mPress Ctrl+C to abort\x1b[0m")
    
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
start()
Api.on('ready', async () => {
    setActivity()})
Api.login(({ clientId })).catch(err => console.error(err)).then()