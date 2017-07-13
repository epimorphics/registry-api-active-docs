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

  /** @return A key for this resource, which we interpret as the relative URI */
  key() {
    return this.relativeURI();
  }

  /** @return The methods that this resource defines */
  methods() {
    return _.map(this.json.methods || [], m => new ApiMethod(m, this));
  }

  /** @return {array} An array of zero or more parameters in the URL */
  urlParameters() {
    const uParams = this.json.relativeUriPathSegments;
    return uParams.map(uParam => uParam.replace(/:|\{|\}/g, ''));
  }
}
