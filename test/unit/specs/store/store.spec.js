import { getters } from '@/store/index';

describe('store', () => {
  describe('#apiEndpoint', () => {
    it('should return an empty endpoint when no data', () => {
      const mockStore = { baseURI: null, relativeURI: null, queryParams: [] };
      expect(getters.apiEndpoint(mockStore)).to.equal('');
    });

    it('should return the correct endpoint when given baseURI', () => {
      const mockStore = { baseURI: 'http://foo/bar', relativeURI: null, queryParams: [] };
      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar');
    });

    it('should return the correct endpoint when given baseURI and relative URI', () => {
      const mockStore = { baseURI: 'http://foo/bar', relativeURI: 'womble', queryParams: [] };
      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble');

      const mockStore2 = { baseURI: 'http://foo/bar', relativeURI: '/womble', queryParams: [] };
      expect(getters.apiEndpoint(mockStore2)).to.equal('http://foo/bar/womble');
    });

    it('should return the correct endpoint when given uri parameters', () => {
      const mockStore = { baseURI: 'http://foo/bar', relativeURI: 'womble', queryParams: [{ marvin: 'android' }] };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android');
    });

    it('should return the correct endpoint when given multiple uri parameters', () => {
      const mockStore = { baseURI: 'http://foo/bar', relativeURI: 'womble', queryParams: [{ marvin: 'android' }, { life: 42 }] };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android&life=42');
    });
  });
});
