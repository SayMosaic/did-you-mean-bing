const runDidYouMeanTest = require('../util').runDidYouMeanTest
describe('Get correct query from Bing did you mean', function vevoTest() {
  runDidYouMeanTest('play firework from katy berry', 'play firework from katy perry')
  runDidYouMeanTest('play wolves from selina gomez', 'play wolves from selena gomez')
  runDidYouMeanTest('play fire fly from owl city', 'play fireflies from owl city')
  runDidYouMeanTest('play sunny days from armin van boring', 'play sunny days from armin van burren')
  runDidYouMeanTest('play michael jackson', 'play michael jackson')
})
