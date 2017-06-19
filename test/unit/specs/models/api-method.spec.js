import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';

const r = new ApiResource(FIXTURE);
const meth = r.methods()[0];

describe('ApiMethod', () => {
  describe('#displayName()', () => {
    it('should return the display name of the method', () => {
      expect(meth.displayName()).to.equal('List the register');
    });
  });

  describe('#action()', () => {
    it('should return the HTTP action of the method', () => {
      expect(meth.action()).to.equal('get');
    });
  });

  describe('#key()', () => {
    it('should return a key that uniquely identifies this action', () => {
      expect(meth.key()).to.equal('get-/');
    });
  });

  describe('#resource()', () => {
    it('should return the resource that this action is part of', () => {
      expect(meth.resource().displayName()).to.equal('/');
    });
  });

  describe('#description()', () => {
    it('should return the description of this operation', () => {
      expect(meth.description()).to.equal('Returns the JSON description of the register that is used for testing and demos');
    });
  });

  describe('#apiParameters()', () => {
    it('should return an array of the API parameters for the operation', () => {
      const params = meth.apiParameters();
      expect(params).to.not.be.empty; //eslint-disable-line
    });
  });
});
