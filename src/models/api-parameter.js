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

  /** @return The enumeration of values for this parameter, or null */
  enumValues() {
    return this.json.enum || null;
  }

  /** @return The name of the parameter */
  name() {
    return this.json.name;
  }

  /** @return {boolean} True if this parameter has a default value */
  hasDefaultValue() {
    return !!this.defaultValue();
  }

  /** @return {any} The default value for the parameter, if defined */
  defaultValue() {
    return this.json.default;
  }
}
