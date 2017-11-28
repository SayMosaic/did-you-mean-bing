const runDidYouMeanTest = require('../util').runDidYouMeanTest
describe('Get correct query from Vevo', function vevoTest() {
  runDidYouMeanTest('play fireworks from katy perry', 'play firework from katy perry')
  runDidYouMeanTest('play wolf from selena gomez', 'play wolves from selena gomez')
  runDidYouMeanTest('play firefly from owl city', 'play fireflies from owl city')
  runDidYouMeanTest('play sunny day from armin van burren', 'play sunny days from armin van burren')
})
