import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';
import API_FIXTURE from './api-fixture';

describe('ApiResource', () => {
  describe('#displayName()', () => {
    it('should return the display name of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.displayName()).to.equal('/');
    });
  });

  describe('#absoluteURI()', () => {
    it('should return the absolute URI of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.absoluteURI()).to.equal('http://environment-registry.epimorphics.net/registry/def/test/');
    });
  });

  describe('#relativeURI()', () => {
    it('should return the relative URI of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.relativeURI()).to.equal('/');
    });
  });

  describe('#key()', () => {
    it('should return a unique key for this resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.key()).to.equal('/');
    });
  });

  describe('#urlParameters()', () => {
    it('should return an empty array if no URL parameters appear in the URL', () => {
      const resources = API_FIXTURE.resources.map(r => new ApiResource(r));
      const resource = resources[0];

      expect(resource.urlParameters()).to.deep.equal([]);
    });
    it('should return an array of parameters in the URL', () => {
      const resources = API_FIXTURE.resources.map(r => new ApiResource(r));
      const resource = resources[1];
      expect(resource.urlParameters()).to.deep.equal(['version']);
    });
  });
});
