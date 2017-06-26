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
  /** User has selected an operation within a resource */
  [types.SELECT_OPERATION](state, operation) {
    state.currentOperation = operation;
    state.currentResource = operation.resource();
  },
  /** A new base URI has been given */
  [types.SET_API_BASE_URI](state, uri) {
    state.baseURI = uri;
  },
  /** A new relative URI for the API operation has been set */
  [types.SET_API_RELATIVE_URI](state, relativeURI) {
    state.relativeURI = relativeURI;
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
};

function asUrlParam(obj) {
  const k = _.keys(obj)[0];
  const v = obj[k];

  if (v === true) {
    return k;
  }
  return `${k}=${encodeURIComponent(v)}`;
}

export const getters = {
  /** @return The current API endpoint, assembled from the various pieces */
  apiEndpoint(store) {
    if (store.baseURI) {
      const sep = (store.relativeURI && !store.relativeURI.startsWith('/')) ? '/' : '';
      const queryParams = _.map(store.queryParams, asUrlParam).join('&');
      const queryPart = _.isEmpty(queryParams) ? '' : `?${queryParams}`;

      return `${store.baseURI}${sep}${store.relativeURI || ''}${queryPart}`;
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
    currentOperation: null,
    currentResource: null,
    baseURI: null,
    relativeURI: null,
    queryParams: [],
    apiResult: null,
  },
  mutations,
  getters,
});
