const { rateDogeEur } = require('../requests')

function rate (message) {
  rateDogeEur().then((rate) => {
    message.channel.send('Sorry, the rate command is not working at the moment.')
  }).catch((error) => {
    message.channel.send(error)
  })
}

module.exports = rate
