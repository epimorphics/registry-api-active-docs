/** Mixin to provide common interface to updating the store as a value changes */
import _ from 'lodash';
import { SELECT_API_PARAM,
         UNSELECT_API_PARAM,
         CLEAR_API_RESULT,
         CLEAR_API_RETURN_HEADERS,
       } from '@/store/mutation-types';

export default {
  /** Event callback invoked when the gating option control for a parameter changes */
  enableOption() {
    if (!this.checked) {
      this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
    } else {
      this.updateOption(this.optionValue());
    }

    this.clearCurrentResults();
  },

  /** Event callback invoked when the value for an API parameter changes */
  updateOption(value) {
    const hasValue = !(_.isUndefined(value) ||
                       _.isNull(value) ||
                       (_.isString(value) && _.isEmpty(value)));

    if (this.checked && hasValue) {
      this.$set(this, 'value', value);
      this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
      this.$store.commit(SELECT_API_PARAM, { [this.apiParam.name()]: value });
    }

    this.clearCurrentResults();
  },

  /** Check to see if this param has a default value, and select it if so */
  checkDefaultValue() {
    const queryParams = this.$route.query;

    const defaultValue =
      this.apiParam.defaultValue() ||
      queryParams[this.apiParam.name()];

    if (defaultValue) {
      this.checked = true;
      this.updateOption(this.parseValue(defaultValue));
    }
  },

  /** Default value parse is just to return the string */
  parseValue(value) {
    return value;
  },

  /** Auxilliary method to clear the output components when the user state changes */
  clearCurrentResults() {
    this.$store.commit(CLEAR_API_RESULT);
    this.$store.commit(CLEAR_API_RETURN_HEADERS);
  },
};
