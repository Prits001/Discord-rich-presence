<h1 align="center">[Discord] FireAlpaca-rich-presence</h1>
Script written in JavaScript adding user a cutomizable rich presence in their discord account.

## Disclaimer

|Script was made for Educational purposes|
|-------------------------------------------------|
This project was created only for good purposes and personal use.

## Features
- Async Discord rpc
- Customizable by user

## How To Setup/Install
- Unzip archive

#### Please set your informations in the config.json file!
#### Remember that the line has to be at least 2 characters long!
```json
{
    "clientId":"", #application id of a bot(already set in releases/source code)

    "drawingname":"Drawing something", #first line in rich presence
    
    "additionalinfo":"Bottom text", #second line in rich presence

    "largeimagetext":":)" #text when hovering above icon
}
```
## How to run
#### How to run release
- Execute binary file(exe)

#### How to run source
(requires Node.js)
```
$npm i discord-rpc
$main.js
```
## Contacts
- Discord: Prits#2138
