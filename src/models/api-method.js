/**
 * Value object encapsulating an API method
 */

export default class ApiMethod {
  constructor(json) {
    this.json = json;
  }

  /** @return The display name of the method */
  displayName() {
    return this.json.displayName;
  }

  /** @return The HTTP action of the method */
  action() {
    return this.json.method;
  }
}
