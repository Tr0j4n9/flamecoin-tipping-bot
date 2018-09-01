const { GIPHY_KEY } = require('../settings')

const HELP_TEXT = '```Flamecoin \n \
Command list : \n \
  - **help** : Get help! \n \
  - **tip** : Tip someone some flamecoin \n \
  - **balance** : Get your balance \n \
  - **rate** : Get current value \n \
  - **address** : Show an used wallet so you can refill your wallet \n \
  - **withdraw** : Move coins to an external address \n \
  - **qrcode** : Show your qrcode to receive much money \n \
  - **voucher** : Get your flamecoins from your voucher card! (Only work in private message with the bot) \n \
```'

function help(message) {
  message.channel.send(HELP_TEXT)
}

module.exports = help
