/** Call the given API endpoint, and bind the result to the global store */

import Axios from 'axios';
import _ from 'lodash';
import { SET_API_RESULT, SET_API_RETURN_HEADERS } from '@/store/mutation-types';
import SimpleAuth from './simple-auth';

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

/**
 * Determine the appropriate options for this API call
 * @param {Object} options Options passed in from the original caller
 * @return {Object} Object containing API call options
 */
function apiCallOptions(options) {
  const operation = options.store.state.currentOperation;
  const apiOptions = {
    url: options.endpoint,
    method: operation.action(),
  };

  if (operation.expectsContentType()) {
    apiOptions.headers = {
      Accept: options.acceptType,
    };
  }

  if (operation.requiresAuth()) {
    apiOptions.auth = SimpleAuth.credentials();
    // apiOptions.withCredentials = true;
  }

  if (operation.expectsPayload()) {
    apiOptions.data = options.payload;

    if (!apiOptions.headers) {
      apiOptions.headers = {};
    }
    apiOptions.headers['Content-Type'] = options.payloadContentType;
  }

  return apiOptions;
}

/**
 * Create a user-readable summary of the status and response headers
 * @param {object} response The response object from the HTTP call
 * @return {string} A summary of the response status and headers
 */
function summariseHeaders(response) {
  const summary = `${response.status} ${response.statusText}`;
  const headers = _.map(response.headers, (val, key) => `${key}: ${val}`);

  return [summary, ...headers].join('\n');
}

/** Entry point to invoke the current API endpoint
 * @param options.endpoint The endpoint URL
 * @param options.action The HTTP action to use
 * @param options.payload Optional API payload for put and post operations
 * @param options.store The Vuex store that will receive the result
 */
export default function invokeApiEndpoint(options) {
  Axios
    .request(apiCallOptions(options))
    .then((response) => {
      options.store.commit(SET_API_RESULT, asCodeString(response));
      options.store.commit(SET_API_RETURN_HEADERS, summariseHeaders(response));
    });
}
