import { getters } from '@/store/index';

describe('store', () => {
  describe('#apiEndpoint', () => {
    it('should return an empty endpoint when no data', () => {
      const mockStore = { absoluteURI: null, queryParams: [] };
      expect(getters.apiEndpoint(mockStore)).to.equal('');
    });

    it('should return the correct endpoint when given absoluteURI', () => {
      const mockStore = { absoluteURI: 'http://foo/bar', queryParams: [] };
      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar');
    });

    it('should return the correct endpoint when given uri parameters', () => {
      const mockStore = { absoluteURI: 'http://foo/bar/womble', queryParams: [{ marvin: 'android' }] };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android');
    });

    it('should return the correct endpoint when given multiple uri parameters', () => {
      const mockStore = { absoluteURI: 'http://foo/bar/womble', queryParams: [{ marvin: 'android' }, { life: 42 }] };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android&life=42');
    });
  });

  describe('#apiResultFormat', () => {
    it('should return null if the results format has not yet been determined', () => {
      const mockStore = { queryParams: [] };

      expect(getters.apiResultFormat(mockStore)).to.be.null; // eslint-disable-line
    });

    it('should return the results format when it has been determined', () => {
      const mockStore = { queryParams: [{ _format: 'json' }] };

      expect(getters.apiResultFormat(mockStore)).to.equal('json');
    });
  });
});
