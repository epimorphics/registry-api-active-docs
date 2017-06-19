/**
 * Value object encapsulating an API method
 */
import _ from 'lodash';
import ApiParameter from './api-parameter';

export default class ApiMethod {
  constructor(json, resource) {
    this.json = json;
    this.parent = resource;
  }

  /** @return The display name of the method */
  displayName() {
    return this.json.displayName;
  }

  /** @return The HTTP action of the method */
  action() {
    return this.json.method;
  }

  /** @return The resource that this method is part of */
  resource() {
    return this.parent;
  }

  /** @return A key which uniquely identifies this method */
  key() {
    return `${this.action()}-${this.resource().key()}`;
  }

  /** @return The description of the operation */
  description() {
    return this.json.description;
  }

  /** @return The API parameters for this method */
  apiParameters() {
    if (!this.params) {
      this.params = _.map(this.json.queryParameters || [], json => new ApiParameter(json));
    }
    return this.params;
  }
}
