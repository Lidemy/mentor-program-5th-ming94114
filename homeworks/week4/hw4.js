const request = require('request')

request({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '84u43e7031k5fk94io1puhjnqyu5xm'
  }
},
(error, response, body) => {
  if (error) {
    console.log(error)
    return
  }
  let obj
  try {
    obj = JSON.parse(body)
  } catch (error) {
    console.log(error)
  }
  const topGameList = obj.top
  for (let i = 0; i < topGameList.length; i++) {
    const item = topGameList[i]
    console.log(`${item.viewers} ${item.game.name}`)
  }
}
)
