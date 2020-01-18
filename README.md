# Github Actions Weather Bot

[GitHub Actions Tutorial on Youtube](https://youtu.be/J4EhgEskSZA)

1. Make a request to a weather API
2. Process data into human readable nessage
3. Send the message using a chat API
4. Schedule the code to run once a day using Github Actions

## Requirements

- Telegram Chat client and account
- OpenWeather API key
- Node.js >= 10.15.2
- npm >= 6.13.6
- Yarn Package Manager

### Install Notes
- Telegram client on macOS app store
- OpenWeather API created key for "gawb"
- Node.js:
```
$ sudo apt install nodejs
```
- npm:
```
$ sudo apt install npm
$ sudo npm install npm@latest -g
```
- yarn:
```
$ sudo apt install yarnpkg
$ alias yarn=yarnpkg
```