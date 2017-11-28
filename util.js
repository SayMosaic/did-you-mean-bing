const assert = require('assert')
const didYouMean = require('./').didYouMean
const aggressiveDidYouMeanSpotify = require('./').aggressiveDidYouMeanSpotify

function runDidYouMeanTest(wrongQuery, correctQuery) {
  it(`"${wrongQuery}" => "${correctQuery}"`, function vevo(done) {
    didYouMean(wrongQuery)
      .then(res => {
        assert.equal(res, correctQuery)
        done()
      })
      .catch(done)
  })
}

function runAggressiveDidYouMeanSpotify(wrongQuery, correctQuery) {
  it(`"${wrongQuery}" => "${JSON.stringify(correctQuery)}"`, function vevo(done) {
    aggressiveDidYouMeanSpotify(wrongQuery)
      .then(res => {
        assert.equal(JSON.stringify(res), JSON.stringify(correctQuery))
        done()
      })
      .catch(done)
  })
}



module.exports = {
  runDidYouMeanTest: runDidYouMeanTest,
  runAggressiveDidYouMeanSpotify: runAggressiveDidYouMeanSpotify
}
