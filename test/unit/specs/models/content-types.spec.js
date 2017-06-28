import ContentTypes from '@/models/content-types';

describe('ContentTypes', () => {
  describe('#all', () => {
    it('should return a sorted array of content types', () => {
      expect(ContentTypes.all()).to.deep.equal(['csv', 'json', 'rdf', 'ttl']);
    });
  });

  describe('#allLabels', () => {
    it('should return an array of content type labels', () => {
      expect(ContentTypes.allLabels()).to.deep.equal(['csv', 'json', 'RDF/XML', 'Turtle']);
    });
  });

  describe('#byName', () => {
    it('should return the correct content type for a short name', () => {
      expect(ContentTypes.byName('rdf').label).to.equal('RDF/XML');
    });
  });

  describe('#byMimeType', () => {
    it('should return the correct content type for a mime type', () => {
      expect(ContentTypes.byMimeType('application/rdf+xml').label).to.equal('RDF/XML');
    });
  });
});
