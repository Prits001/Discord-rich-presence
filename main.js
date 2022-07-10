filename="./config.json";
const fs = require('fs');
let rawdata = fs.readFileSync(filename);
let config = JSON.parse(rawdata);
const clientId = config.clientId
const DiscordApi = require('discord-rpc')
const Api = new DiscordApi.Client({ transport: 'ipc'})
DiscordApi.register(clientId);
function Console(){
    console.log("")
}

async function setActivity() {
    if (!Api) return;
    Api.setActivity({
        details: config.drawingname,
        state: config.state,
        startTimestamp: Date.now(),
        largeImageKey: config.largeImageIcon,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageIcon,
        smallImageText: config.smallImageText,
        instance: false,
        buttons: [
            {
                label: config.button1.text,
                url: config.button1.link
            },
            {
                label: config.button2.text,
                url: config.button2.link
            
            }
        ]
    });
};
Api.on('ready', async () => {
    setActivity()})
Api.login(({ clientId })).catch(err => console.error(err))
g