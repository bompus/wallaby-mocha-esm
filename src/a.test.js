import assert from 'assert';
import { hostname } from 'os';
import { expect as chaiExpect } from 'chai';
import { default as jestExpect } from 'expect';

const hn = hostname();

describe('a.test.js', function () {
  it('assert - should pass', function () {
    assert.strictEqual(typeof hn, 'string');
  });

  it('assert - should fail', function () {
    assert.strictEqual(typeof hn, 'number');
  });

  it('chai.expect - should pass', function () {
    chaiExpect(typeof hn).to.equal('string');
  });

  it('chai.expect - should fail', function () {
    chaiExpect(typeof hn).to.equal('number');
  });

  it('jest.expect - should pass', function () {
    jestExpect(typeof hn).toStrictEqual('string');
  });

  it('jest.expect - should fail', function () {
    jestExpect(typeof hn).toStrictEqual('number');
  });
});
