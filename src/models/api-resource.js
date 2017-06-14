/**
 * Value object wrapping an instance of a RAML resource
 */

export default class ApiResource {
  constructor(json) {
    this.json = json;
  }

  /** @return The display name of the resource */
  displayName() {
    return this.json.displayName;
  }
}
