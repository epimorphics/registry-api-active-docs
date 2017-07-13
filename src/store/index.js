import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/* Vuex's recommended style breaks an Airbnb eslint rule, so disable it for this file */
/* eslint-disable no-param-reassign */

export const mutations = {
  /** A new API model has been loaded */
  [types.LOAD_API_MODEL](state, model) {
    state.apiModel = model;
  },
  [types.LOAD_EXAMPLES](state, examples) {
    state.examples = examples;
  },
  /** User has selected an operation within a resource */
  [types.SELECT_OPERATION](state, operation) {
    state.currentOperation = operation;
    state.currentResource = operation.resource();
  },
  /** A new URI has been given */
  [types.SET_API_ABSOLUTE_URI](state, uri) {
    state.absoluteURI = uri;
  },
  /** A new API action has been set */
  [types.SET_API_ACTION](state, apiAction) {
    state.apiAction = apiAction;
  },
  /** Add an API query parameter */
  [types.SELECT_API_PARAM](state, paramValue) {
    state.queryParams.push(paramValue);
  },
  /** Remove an API query parameter */
  [types.UNSELECT_API_PARAM](state, paramName) {
    const i = _.findIndex(state.queryParams, param => !_.isUndefined(param[paramName]));

    if (i >= 0) {
      state.queryParams.splice(i, 1);
    }
  },
  /** Remove all API query parameters */
  [types.CLEAR_API_PARAMS](state) {
    state.queryParams.splice(0, state.queryParams.length);
  },
  /** Record the API result */
  [types.SET_API_RESULT](state, result) {
    state.apiResult = result;
  },
  /** Clear the API result */
  [types.CLEAR_API_RESULT](state) {
    state.apiResult = '';
  },
  /** Record the API payload */
  [types.SET_API_PAYLOAD](state, payload) {
    state.apiPayload = payload;
  },
  /** Clear the API payload */
  [types.CLEAR_API_PAYLOAD](state) {
    state.apiPayload = '';
  },
  /** Record the API headers */
  [types.SET_API_RETURN_HEADERS](state, headers) {
    state.apiReturnHeaders = headers;
  },
  /** Clear the API headers */
  [types.CLEAR_API_RETURN_HEADERS](state) {
    state.apiReturnHeaders = '';
  },
  /** Clear the URL parameters map */
  [types.CLEAR_URL_PARAMETERS](state) {
    state.urlParameters = {};
  },
  /** Set a URL parameter */
  [types.SET_URL_PARAMETER](state, varValue) {
    state.urlParameters = Object.assign({}, state.urlParameters, varValue);
  },
};

function asUrlParam(obj) {
  const k = _.keys(obj)[0];
  const v = obj[k];

  if (v === true) {
    return k;
  }
  return `${k}=${encodeURIComponent(v)}`;
}

/**
 * Return a version of the given template string in which all `{var}`
 * sequences are replaced by any defined values in the table
 * of url parameters.
 *
 * @param {string} uri The URI to perform substitutions on
 * @param {object} vars The current value of any variables
 * @return {string} URI with substitutions applied
 */
function withSubstitutions(uri, vars) {
  let substUri = uri;

  _.each(vars, (v, k) => {
    substUri = substUri.replace(`{${k}}`, v);
  });

  return substUri;
}

export const getters = {
  /** @return The current API endpoint, assembled from the various pieces */
  apiEndpoint(store) {
    if (store.absoluteURI) {
      const substitutedURI = withSubstitutions(store.absoluteURI, store.urlParameters);
      const queryParams = _.map(store.queryParams, asUrlParam).join('&');
      const queryPart = _.isEmpty(queryParams) ? '' : `?${queryParams}`;

      return `${substitutedURI}${queryPart}`;
    }

    return '';
  },

  /** @return The currently selected API results format */
  apiResultFormat(store) {
    // eslint-disable-next-line no-underscore-dangle
    return (_.find(store.queryParams, '_format') || { _format: null })._format;
  },
};

export default new Vuex.Store({
  strict: debug,
  state: {
    apiModel: {},
    examples: {},
    currentOperation: null,
    currentResource: null,
    absoluteURI: null,
    queryParams: [],
    apiResult: null,
    apiPayload: null,
    apiReturnHeaders: null,
    urlParameters: {},
  },
  mutations,
  getters,
});
