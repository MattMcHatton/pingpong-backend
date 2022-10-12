import assert from 'assert'
import adding from '../dist/utils/addUtil.js'

describe('Adding Util', function () {
  describe('adding function', function () {
    it('should return 2 when 1 + 1 is entered', function () {
      assert.equal(adding(1,1), 2)
    })
  })
});

