Promise = require('bluebird')
const axios = require('axios')

function didYouMean(wrongQuery) {
  let verb = false
  if (wrongQuery.split(' ')[0] === 'play') {
    wrongQuery = wrongQuery.replace('play ', '')
    verb = 'play '
  }
  return axios.get(`https://www.bing.com/search?q=${wrongQuery}`)
  .then(res => res.data)
  .then(html => {
    let bingVanilla
    let vevo
    try {
      bingVanilla = checkBingVanilla(html)
    } catch (bingThinksItsLegit) {

    }
    if (bingVanilla && bingVanilla !== wrongQuery) return bingVanilla
    try {
      vevo = checkVevo(html)
    } catch (nothingFromVevo) {
    }

    if (vevo && vevo !== wrongQuery) return vevo
    throw new Error('Nothing found!')
  })
  .then(res => `${verb}${res}`.replace(/\s\s+/g, ' '))
  .catch(() => null)
}

function aggressiveDidYouMeanSpotify(wrongQuery) {
  if (wrongQuery.split(' ')[0] === 'play') wrongQuery = wrongQuery.replace('play ', '')
  return axios.get(`https://www.bing.com/search?q=${wrongQuery} spotify`).then(res => res.data)
  .then(html => {
    const typeAndId = html.split('https://open.spotify.com/')[1].split('"')[0].split("/")
    const length = typeAndId.length
    if (typeAndId[length - 2] === 'playlist') return {type: typeAndId[length - 2], id: typeAndId[length - 1], userId: typeAndId[length - 3]}
    return {type: typeAndId[length - 2], id: typeAndId[length - 1]}
  })
  .catch(() => null)
}

function checkBingVanilla(html) {
  if (html.includes('Including results for')) {
    return html.split('Including results for ')[1].split('</div>')[0].replace(/(<([^>]+)>)/ig, '').replace('.', '')
  }
  return html.split('Showing results for ')[1].split('</div>')[0].replace(/(<([^>]+)>)/ig, '').replace('.', '')
}

function checkVevo(html) {
  const trimSlashWords = html.split('vevo.com/watch/')[1].split('/')
  const trimDashWord = `${trimSlashWords[1]} from ${trimSlashWords[0]}`.split('-').join(' ')
  return trimDashWord.replace(/ *\([^)]*\) */g, ' ')
}

module.exports = {
  didYouMean: didYouMean,
  aggressiveDidYouMeanSpotify: aggressiveDidYouMeanSpotify
}
