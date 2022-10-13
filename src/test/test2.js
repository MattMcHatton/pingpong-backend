import assert from 'assert'
import subtracting from '../../dist/utils/subtractUtil.js'

describe('Subtracting Util', function () {
  describe('subtracting function', function () {
    it('should return 2 when 4 - 2 is entered', function () {
      assert.equal(subtracting(4,2), 2)
    })
  })
});