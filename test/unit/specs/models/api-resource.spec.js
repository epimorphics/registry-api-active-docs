import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';

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
});
