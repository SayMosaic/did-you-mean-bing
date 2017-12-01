const runAggressiveDidYouMeanSpotify = require('../util').runAggressiveDidYouMeanSpotify

describe('Return null when Spotify aggressively has a unrelated input ', function vevoTest() {
  runAggressiveDidYouMeanSpotify('play podcast ted radio hour', null)
})

describe('Get playable from Spotify aggressively with wrong name, track/album/artist/playlist', function vevoTest() {
  runAggressiveDidYouMeanSpotify('play fireworks from katy perry', {type: 'track', id: '1mXuMM6zjPgjL4asbBsgnt'})
  runAggressiveDidYouMeanSpotify('play wolf from Selena Gomez', {type: 'album', id: '5gQZvWM1o8NkQndueJtZcP'})
  runAggressiveDidYouMeanSpotify('play firefly from owl city', {type: 'track', id: '1mr3616BzLdhXfJmLmRsO8'})
  runAggressiveDidYouMeanSpotify('play sunny day from armin van buuren', {type: 'album', id: '0SottnyJaBApBrZZT6Y3kb'})
  runAggressiveDidYouMeanSpotify('play Selina Gomez', {type: 'artist', id: '0C8ZW7ezQVs4URX5aX7Kqx'})
  runAggressiveDidYouMeanSpotify('play new music fridays', {type: 'playlist', id: '1yHZ5C3penaxRdWR7LRIOb', userId: 'spotify'})
})

describe('Get playable from Spotify aggressively with correct name', function vevoTest() {
  runAggressiveDidYouMeanSpotify('play firework from katy perry', {type: 'track', id: '1mXuMM6zjPgjL4asbBsgnt'})
  runAggressiveDidYouMeanSpotify('play wolves from Selena Gomez', {type: 'album', id: '5gQZvWM1o8NkQndueJtZcP'})
  runAggressiveDidYouMeanSpotify('play fireflies from owl city', {type: 'track', id: '1mr3616BzLdhXfJmLmRsO8'})
  runAggressiveDidYouMeanSpotify('play sunny days from armin van buuren', {type: 'album', id: '2Pnc34J8XGKOfnBBnfJisu'})
  runAggressiveDidYouMeanSpotify('play Selena Gomez', {type: 'artist', id: '0C8ZW7ezQVs4URX5aX7Kqx'})
  runAggressiveDidYouMeanSpotify('play new music friday', {type: 'playlist', id: '1yHZ5C3penaxRdWR7LRIOb', userId: 'spotify'})
})
