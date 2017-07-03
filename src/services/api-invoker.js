/** Call the given API endpoint, and bind the result to the global store */

import Axios from 'axios';
import _ from 'lodash';
import { SET_API_RESULT } from '@/store/mutation-types';

/** Ensure the returned result is expressed as a string to go into the edit buffer */
function asCodeString(response) {
  const data = response.data;
  if (_.isObject(data)) {
    return JSON.stringify(data, null, 2);
  } else if (_.isString(data)) {
    return data;
  }

  return `${data}`;
}

/** Entry point to invoke the current API endpoint
 * @param options.endpoint The endpoint URL
 * @param options.action The HTTP action to use
 * @param options.payload Optional API payload for put and post operations
 * @param options.store The Vuex store that will receive the result
 */
export default function invokeApiEndpoint(options) {
  Axios
    .get(options.endpoint, {
      headers: {
        Accept: options.contentType,
      },
    })
    .then((response) => {
      options.store.commit(SET_API_RESULT, asCodeString(response));
    });
}
