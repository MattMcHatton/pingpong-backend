import assert from 'assert'
import adding from '../dist/utils/counterUtil.js'

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('adding function', function () {
    it('should return 2 when 1 + 1 is entered', function () {
      assert.equal(adding(1,1), 2)
    })
  })
});

