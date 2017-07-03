/** Simple fixed model representing the content types we permit */
import _ from 'lodash';

const CONTENT_TYPES = {
  'json-ld': {
    label: 'json-ld',
    codemirrorMode: 'application/javascript',
    mimeType: 'application/ld+json',
  },
  csv: {
    label: 'csv',
    codemirrorMode: 'text/plain',
    mimeType: 'text/csv',
  },
  ttl: {
    label: 'Turtle',
    codemirrorMode: 'text/turtle',
    mimeType: 'text/turtle',
  },
  rdf: {
    label: 'RDF/XML',
    codemirrorMode: 'application/xml',
    mimeType: 'application/rdf+xml',
  },
};

/** @return An array of all of the content types */
function all() {
  return _.keys(CONTENT_TYPES).sort();
}

/** @return An array of the labels for content types */
function allLabels() {
  return all().map(ct => CONTENT_TYPES[ct].label);
}

/** @return The content-type object for the given content type short name */
function byName(contentType) {
  return CONTENT_TYPES[contentType];
}

/** @return The content-type object for a given mime type */
function byMimeType(mimeType) {
  return _.find(CONTENT_TYPES, ct => ct.mimeType === mimeType);
}

export default {
  all,
  allLabels,
  byName,
  byMimeType,
};
