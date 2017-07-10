/** Simple service to load payload examples from server and register with Vuex */

import Axios from 'axios';
import { LOAD_EXAMPLES } from '@/store/mutation-types';

const EXAMPLES_FILE = 'static/example-payloads.json';

/** Entry point to load the examples from the server
 */
export default function loadExamples(options) {
  Axios
    .get(EXAMPLES_FILE)
    .then((file) => {
      options.store.commit(LOAD_EXAMPLES, file.data);
    });
}
