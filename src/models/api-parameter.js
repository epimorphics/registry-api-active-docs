/**
 * Encapsulates a URI parameter in a method
 */
import _ from 'lodash';

export default class ApiParameter {
  constructor(json) {
    this.json = json;
  }

  /** @return The display name of the API parameter */
  displayName() {
    return this.json.displayName;
  }

  /** @return The appropriate component type for this parameter */
  componentType() {
    let t = this.json.type;
    t = _.isArray(t) ? _.first(t) : t;

    if (t.enum) {
      return 'enum';
    } else if (t === 'datetime-only') {
      return 'datetime';
    }

    return t;
  }
}
