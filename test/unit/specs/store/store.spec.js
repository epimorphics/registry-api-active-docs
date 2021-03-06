import { getters } from '@/store/index';

describe('store', () => {
  describe('#apiEndpoint', () => {
    it('should return an empty endpoint when no data', () => {
      const mockStore = {
        absoluteURI: null,
        queryParams: [],
        urlParameters: {},
      };
      expect(getters.apiEndpoint(mockStore)).to.equal('');
    });

    it('should return the correct endpoint when given absoluteURI', () => {
      const mockStore = {
        absoluteURI: 'http://foo/bar',
        queryParams: [],
        urlParameters: {},
      };
      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar');
    });

    it('should return the correct endpoint when given uri parameters', () => {
      const mockStore = {
        absoluteURI: 'http://foo/bar/womble',
        queryParams: [{ marvin: 'android' }],
        urlParameters: {},
      };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android');
    });

    it('should return the correct endpoint when given multiple uri parameters', () => {
      const mockStore = {
        absoluteURI: 'http://foo/bar/womble',
        queryParams: [{ marvin: 'android' }, { life: 42 }],
        urlParameters: {},
      };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble?marvin=android&life=42');
    });

    it('should return the correct endpoint when given a templated path with no subsitution', () => {
      const mockStore = {
        absoluteURI: 'http://foo/bar/womble/{urlParam}',
        queryParams: [],
        urlParameters: {},
      };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble/{urlParam}');
    });

    it('should return the correct endpoint when given a templated path with a subsitution', () => {
      const mockStore = {
        absoluteURI: 'http://foo/bar/womble/{urlParam}',
        queryParams: [],
        urlParameters: { urlParam: 'foobar' },
      };

      expect(getters.apiEndpoint(mockStore)).to.equal('http://foo/bar/womble/foobar');
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
