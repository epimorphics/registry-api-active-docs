/** Mixin to provide common interface to updating the store as a value changes */
import { SELECT_API_PARAM, UNSELECT_API_PARAM } from '@/store/mutation-types';

export default {
  enableOption() {
    if (!this.checked) {
      this.$store.commit(UNSELECT_API_PARAM, this.apiParam.name());
    } else {
      this.updateOption();
    }
  },
  updateOption() {
    const value = this.optionValue();
    if (this.checked && value) {
      this.$store.commit(SELECT_API_PARAM, { [this.apiParam.name()]: value });
    }
  },
};
