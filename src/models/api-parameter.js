/**
 * Encapsulates a URI parameter in a method
 */

export default class ApiParameter {
  constructor(json) {
    this.json = json;
  }

  /** @return The display name of the API parameter */
  displayName() {
    return this.json.displayName;
  }
}
