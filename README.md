<h1 align="center">[Discord] Discord-rich-presence</h1>
Script written in JavaScript adding user a cutomizable rich presence in their discord account.

## Disclaimer

|Script was made for Educational purposes|
|-------------------------------------------------|
This project was created only for good purposes and personal use.

## Features
- Async Discord rpc
- Customizable by user
## Setup your own application for use (optional)
- Create an application on [Discord Developer Portal](https://discord.com/developers/applications)
- Rich Presence -> Art Assets, Add An Image named 'icon' for large image/ 'pfp' for smaller image(preferably my discord avatar for credit)
- General Information -> APPLICATION ID, Copy into config file -> clientId
## How To Setup/Install
- Unzip archive

#### Please set your informations in the config.json file!
#### Remember that the lines has to be at least 2 characters long and less than 128 characters!
```json
{
    "clientId":"", #application id of a bot(already set in releases/source code)

    "description":"Doing something", #first line in rich presence
    
    "additionalinfo":"Bottom text", #second line in rich presence

    "largeimagetext":":)", #text when hovering above icon


    "numberOfButtons":2, #number of buttons shown(0-2)
    
    "loadingdelay": 5, #delay in seconds before loading

    #button one name and url
    "button1Text":"Button One", 
    "button1Link":"https://github.com/Prits001",
    #button two name and url
    "button2Text":"Button Two",
    "button2Link":"https://github.com/Prits001"

}
```
## How to run
#### How to run release
- Execute binary file(exe)

#### How to run source
(requires [Node.js](https://nodejs.org))
```
$npm i discord-rpc
$main.js
```
## Contacts
- Discord: Prits#2138
