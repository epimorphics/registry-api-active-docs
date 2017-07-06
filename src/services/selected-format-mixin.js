/** Simple mixin for computed properties of editor format and mime type */

import ContentTypes from '@/models/content-types';

export default {
  /** @return The selected result format as a string, defaulting to `'json'` */
  resultFormat() {
    return this.$store.getters.apiResultFormat || 'json-ld';
  },
  /** @return The Mime-type corresponding to the selected `resultFormat` */
  resultMimeType() {
    return ContentTypes.byName(this.resultFormat).mimeType;
  },
  /** @return The appropriate CodeMirror editor mode for the selected `resultFormat` */
  editorMode() {
    return ContentTypes.byName(this.resultFormat).codemirrorMode;
  },
};
