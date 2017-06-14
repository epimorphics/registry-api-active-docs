/**
 * Value object wrapping an instance of a RAML resource
 */
import _ from 'lodash';
import ApiMethod from './api-method';

export default class ApiResource {
  constructor(json) {
    this.json = json;
  }

  /** @return The display name of the resource */
  displayName() {
    return this.json.displayName;
  }

  /** @return The absolute URI of the resource */
  absoluteURI() {
    return this.json.absoluteUri;
  }

  /** @return The relative URI of the resource */
  relativeURI() {
    return this.json.relativeUri;
  }

  /** @return The methods that this resource defines */
  methods() {
    return _.map(this.json.methods || [], m => new ApiMethod(m));
  }
}
