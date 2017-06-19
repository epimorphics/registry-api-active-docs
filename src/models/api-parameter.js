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
    let tResult = t;

    if (t === 'string' && this.json.enum) {
      tResult = 'enum';
    } else if (t === 'datetime-only') {
      tResult = 'datetime';
    } else if (t === 'date-only') {
      tResult = 'date';
    }

    return tResult;
  }
}
