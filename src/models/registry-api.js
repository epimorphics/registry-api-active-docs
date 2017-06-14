/*
 * Value object providing convenience methods as a facade
 * over a RAML API object
 */
import _ from 'lodash';
import ApiResource from '@/models/api-resource';

export default class RegistryApi {
  constructor(json) {
    this.json = json;
  }

  /** @return An array of the top-level resources defined in the API */
  resources() {
    return _.map(this.json.resources, r => new ApiResource(r));
  }

  /** @param fn A function to apply to each of the top-level resources in turn */
  eachResource(fn) {
    _.each(this.resources(), fn);
  }
}
