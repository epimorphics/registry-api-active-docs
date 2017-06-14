import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';

describe('ApiResource', () => {
  describe('#displayName()', () => {
    it('should return the display name of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.displayName()).to.equal('/');
    });

    it('should return the absolute URI of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.absoluteURI()).to.equal('http://environment-registry.epimorphics.net/registry/def/test-area/');
    });

    it('should return the relative URI of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.relativeURI()).to.equal('/');
    });
  });
});
