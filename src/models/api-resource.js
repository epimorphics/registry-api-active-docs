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

  /** @return The absolute URI of the resource */
  absoluteURI() {
    return this.json.absoluteUri;
  }

  /** @return The relative URI of the resource */
  relativeURI() {
    return this.json.relativeUri;
  }
}
