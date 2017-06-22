/** Mixin to provide common interface to updating the store as a value changes */
import _ from 'lodash';
import { SELECT_API_PARAM, UNSELECT_API_PARAM } from '@/store/mutation-types';

export default {
  enableOption() {
    if (!this.checked) {
      this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
    } else {
      this.updateOption(this.optionValue());
    }
  },
  updateOption(value) {
    const hasValue = !(_.isUndefined(value) || _.isNull(value));
    if (this.checked && hasValue) {
      this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
      this.$store.commit(SELECT_API_PARAM, { [this.apiParam.name()]: value });
    }
  },
};
