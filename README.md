## Flamecoin Tipping Bot for Discord

Allow you tip flamecoin in your discord chat.

### Development

Copy the `config.json.example` file and rename it to `config.json`

You need to get a Discord ID, Secret and Token. You will also need access to a flamecoind node, and a Giphy API key.

#### Create a Discord app

Go on the Discord page create an app. You will see your bot ID and secret.

Now make your bot an user. You can then get your token.

#### Get a Giphy API key

Go on the [Giphy developers dashboard](https://developers.giphy.com/dashboard/) and create an app to get started on development. Then, request a production key when putting the bot on production.

If you don't want this feature, set `giphy.key` to blank in the `config.json`.

#### Add your bot to your discord server

Click on `Generate OAuth2 URL` and open this url in your browser. It is asking you on which server you want to add your bot.

You should see your bot under `offline`.

#### Launch in devmode

Go in your working directory and launch `npm install` to load dependencies

Then launch your bot with `npm run dev`

Go on the dev/test channel and test your code

#### Flamecoind RPC username/password/hostname

Contact `Tr0j4n9#9724` on discord if you need help with this :)

