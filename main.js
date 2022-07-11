filename="./config.json";
const fs = require('fs');
let rawdata = fs.readFileSync(filename);
let config = JSON.parse(rawdata);
const clientId = config.clientId
const DiscordApi = require('discord-rpc');
const { time } = require('console');
const Api = new DiscordApi.Client({ transport: 'ipc'})
DiscordApi.register(clientId);
function checkInput(){
    if(config.drawingname.length > 128){console.error("\x1b[31mDrawing name must be less or equal to 128 characters long\x1b[0m")}
    if(config.additionalinfo.length > 128){console.error("\x1b[31mAdditional info must be less or equal to 128 characters long\x1b[0m")}
    if(config.largeimagetext.length > 128){console.error("\x1b[31mText when hovering above large image icon must be less or equal to 128 characters long\x1b[0m")}
    if(config.drawingname.length < 2){console.error("\x1b[31mDrawing name must be more or equal to 2 characters long\x1b[0m")}
    if(config.additionalinfo.length < 2){console.error("\x1b[31mAdditional info must be more or equal to 2 characters long\x1b[0m")}
    if(config.largeimagetext.length < 2){console.error("\x1b[31mText when hovering above large image icon must be more or equal to 2 characters long\x1b[0m")}
    if(config.numberOfButtons < 0 || config.numberOfButtons > 2){console.log(`\x1b[31mYou can't have ${config.numberOfButtons} buttons! Please abort and fix the issue!\x1b[0m`)}
    if(config.numberOfButtons > 0){
        if(config.button1Text.length > 32 || config.button1Text.length < 2){console.error("\x1b[31mName of the 1st button can't be less than 2 or more than 32 characters long\x1b[0m")}
        if(config.numberOfButtons === 2){if(config.button2Text.length > 32 || config.button2Text.length < 2){console.error("\x1b[31mName of the 2nd button can't be less than 2 or more than 32 characters long\x1b[0m")}}
    }
}

function checkConfig(){
    if(config.clientId === '' || config.drawingname === '' || config.additionalinfo === '' || config.largeimagetext === ''){console.error("\x1b[31mSome data is missing!\x1b[0m")}
    checkInput()
    console.log('\x1b[36m%s\x1b[0m', "[!]", "\x1b[32mCurrent config settings:\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Application id: ", "\x1b[32m"+config.clientId+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Drawing name: ", "\x1b[32m"+config.drawingname+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Additional info: ", "\x1b[32m"+config.additionalinfo+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Text when hovering above large image icon: ","\x1b[32m"+config.largeimagetext+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Ammount of buttons: ","\x1b[32m"+config.numberOfButtons+"\x1b[0m")
    console.log('\x1b[36m%s\x1b[0m',"[#]", "Loading Delay: ","\x1b[32m"+config.loadingdelay+"\x1b[0m")
    if(config.numberOfButtons > 0){
        console.log('\x1b[36m%s\x1b[0m',"[#]", "Name of the 1st button: ","\x1b[32m"+config.button1Text+"\x1b[0m")
        console.log('\x1b[36m%s\x1b[0m',"[#]", "Url of the 1st button: ","\x1b[32m"+config.button1Link+"\x1b[0m")
        if(config.numberOfButtons === 2){
            console.log('\x1b[36m%s\x1b[0m',"[#]", "Name of the 2nd button: ","\x1b[32m"+config.button2Text+"\x1b[0m")
            console.log('\x1b[36m%s\x1b[0m',"[#]", "Url of the 2nd button: ","\x1b[32m"+config.button2Link+"\x1b[0m")
        }
    }
    console.log(`Starting in ${config.loadingdelay} seconds..`)
    console.log("\x1b[46mPress Ctrl+C to abort\x1b[0m")
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, config.loadingdelay * 1000);
    return true
}
function start(){
    console.log("\x1b[35mFireAlpaca Rich Presence - by Prits#2138\x1b[0m")
    checkConfig()
    console.log("-----------------------------------------------------")
    console.log("Connecting to Discord...")
    console.clear()
    console.log("\x1b[35mFireAlpaca Rich Presence - by Prits#2138\x1b[0m \n-----------------------------------------------------")
    console.log("\x1b[32mSuccessfully\x1b[0m Connected to Discord Gateway! :D \n\x1b[46mPress Ctrl+C to abort\x1b[0m")
    
}

async function setActivity() {
    if (!Api) return;
    if(config.numberOfButtons === 0){
    Api.setActivity({
        details: config.drawingname,
        state: config.additionalinfo,
        startTimestamp: Date.now(),
        largeImageKey: 'icon',
        largeImageText: config.largeimagetext,
        smallImageKey: 'pfp',
        smallImageText: "Made by Prits#2138",
        instance: false,
    });}
    if(config.numberOfButtons === 1){
        Api.setActivity({
            details: config.drawingname,
            state: config.additionalinfo,
            startTimestamp: Date.now(),
            largeImageKey: 'icon',
            largeImageText: config.largeimagetext,
            smallImageKey: 'pfp',
            smallImageText: "Made by Prits#2138",
            instance: false,
            buttons: [
                {
                    label: config.button1Text,
                    url: config.button1Link
                }
            ]
        })
    }
    if(config.numberOfButtons === 2){
        Api.setActivity({
            details: config.drawingname,
            state: config.additionalinfo,
            startTimestamp: Date.now(),
            largeImageKey: 'icon',
            largeImageText: config.largeimagetext,
            smallImageKey: 'pfp',
            smallImageText: "Made by Prits#2138",
            instance: false,
            buttons: [
                {
                    label: config.button1Text,
                    url: config.button1Link
                },
                {
                    label: config.button2Text,
                    url: config.button2Link
                }
            ]
        })
    }
};
start()
Api.on('ready', async () => {
    setActivity()})
Api.login(({ clientId })).catch(err => console.error(err))