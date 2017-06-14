import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';

describe('ApiResource', () => {
  describe('#displayName()', () => {
    it('should return the display name of the resource', () => {
      const r = new ApiResource(FIXTURE);
      expect(r.displayName()).to.equal('/');
    });
  });
});
