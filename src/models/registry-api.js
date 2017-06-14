/*
 * Value object providing convenience methods as a facade
 * over a RAML API object
 */
import _ from 'lodash';

export default class RegistryApi {
  constructor(json) {
    this.json = json;
  }

  /** @return An array of the top-level resources defined in the API */
  resources() {
    return this.json.resources;
  }

  /** @param fn A function to apply to each of the top-level resources in turn */
  eachResource(fn) {
    _.each(this.resources(), fn);
  }
}
